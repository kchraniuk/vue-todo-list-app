<template>
  <section class="newTask">
    <form
      @submit.prevent="addTask(newTaskModel)"
    >
        <input type="text"
          v-model="newTaskModel"
          :placeholder="translation.newTaskPlaceholder"
        />
        <button type="submit"
          :disabled="newTaskModel.length < 1"
        >{{translation.add}}</button>
    </form>
  </section>
</template>

<script>
  import ajaxCalls from '@/components/ajaxCalls'
  import translation from '@/components/translation'
  import helpers from '@/components/helpers'

  export default {
    extends: ajaxCalls,
    mixins: [translation, helpers],
    name: 'newTask',
    data() {
      return {
        newTaskModel: '',
      }
    },
    props: {
      tasks: {
        type: Array,
        required: true
      }
    },
    methods: {

      addTask(data, dateStart = null, dateEnd = null) {
        const newTask = {
          'description': data,
          'status': false,
          'dateAdded': this.setCurentTimestamp(),
          'dateStart': dateStart,
          'dateEnd': dateEnd
        };

        this.axiosAddTask(newTask)
            .then( response => {
              this.tasks.push(response.data);
              this.newTaskModel = '';
            })
      }
    }
  }
</script>

<style lang="sass">
  @import '../stylesheets/components/addNewTask.scss'
</style>

