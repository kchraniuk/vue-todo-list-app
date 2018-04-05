<template>
  <div id="app">
    <!-- <search :tasks="tasks" @searchChange="searchValueChanged" /> -->
    <search :tasks="tasks" />
    <newTask :tasks="tasks" />
    <div></div>
  </div>
</template>

<script>
  import search from '@/components/search'
  import newTask from '@/components/addNewTask'

  export default {
    name: 'App',
    data: function () {
      return {
        tasks: [
          { description: 'task 1', status: true },
          { description: 'task 2', status: true },
          { description: 'task 3', status: false },
          { description: 'task 4', status: false }
        ]
      }
    },
    components: {
      search,
      newTask
    }
  }
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
</style>
