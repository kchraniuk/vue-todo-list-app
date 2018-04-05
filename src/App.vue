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
          { description: 'Lorem ipsum dolor', status: true },
          { description: 'Cras pharetra', status: true },
          { description: 'Donec sapien ligula', status: false },
          { description: 'Vivamus porta vulputate finibus', status: true },
          { description: 'Sed nisi turpis', status: true },
          { description: 'Phasellus consectetur ullamcorper', status: false },
          { description: 'Nunc vitae ligula eget enim', status: false }
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
