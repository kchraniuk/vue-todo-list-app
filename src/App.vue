<template>
  <div id="app">
    <!-- <search :tasks="tasks" @searchChange="searchValueChanged" /> -->
    <search :tasks="tasks" />
    <newTask :tasks="tasks" />
    <div></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import search from '@/components/search'
  import newTask from '@/components/addNewTask'

  export default {
    name: 'App',
    data: function () {
      return {
        tasks: []
      }
    },
    components: {
      search,
      newTask
    },
    mounted() {
      this.getTasks()
    },
    methods: {
      getTasks() {
        axios.get('http://localhost:3000/tasks').then(response => {
          this.tasks = response.data
        })
      }
    }
  }
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
</style>
