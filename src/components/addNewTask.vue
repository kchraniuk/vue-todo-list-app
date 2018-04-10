<template>
  <section class="newTask">
    <form @submit.prevent="addTask(newTaskModel)">
        <input type="text" v-model="newTaskModel" :placeholder="translation.newTaskPlaceholder" />
        <button :disabled="newTaskModel.length < 1" type="submit">{{translation.add}}</button>
    </form>
  </section>
</template>

<script>
  import ajaxCalls from '@/components/ajaxCalls'
  import translation from '@/components/translation'

  export default {
    extends: ajaxCalls,
    mixins: [translation],
    name: 'newTask',
    data() {
      return {
        newTaskModel: '',
      }
    },
    props: {
      tasks: {required: true}
    },
    methods: {
      addTask(data) {
        const newTask = { 'description': data, 'status': false };
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

