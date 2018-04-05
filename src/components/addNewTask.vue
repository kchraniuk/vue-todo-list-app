<template>
  <section class="newTask">
    <form @submit.prevent="addNewTask(newTaskModel)">
        <input type="text" v-model="newTaskModel" :placeholder="newTaskPlaceholder" />
        <button :disabled="newTaskModel.length < 1" type="submit">Add new</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'newTask',
    methods: {
      addNewTask (task){

        if(task.length > 1) {
          this.tasks.push({
            description: task,
            status: false
          })
        }
      }
    },
    data() {
      return {
        newTaskModel: '',
        newTaskPlaceholder: 'Enter the task name'
      }
    },
    props: {
      tasks: {required: true}
    }
  }
</script>

<style lang="sass">
  @import '../stylesheets/components/addNewTask.scss'
</style>

