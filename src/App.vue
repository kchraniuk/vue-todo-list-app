<template>
  <div id="app">
    <!-- <search :tasks="tasks" @searchChange="searchValueChanged" /> -->
    <search :tasks="tasks" />
    <newTask :tasks="tasks" />
    <div></div>
  </div>
</template>

<script>
  import ajaxCalls from '@/components/ajaxCalls.js';
  import search from '@/components/search';
  import newTask from '@/components/addNewTask';

  export default {
    extends: ajaxCalls,
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
      this.axiosGetTasks()
          .then(response => {
            this.tasks = response.data
          })
    }
  }
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
</style>
