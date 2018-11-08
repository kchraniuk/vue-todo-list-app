<template>
  <div id="app">
    <search
      v-on:emitSearchValue="updateSearch($event)"
    />
    <tasksList
      :tasks="tasks"
      :search="search"
    />
    <newTask
      :tasks="tasks"
    />
  </div>
</template>

<script>

  import ajaxCalls from '@/components/ajaxCalls.js';
  import search from '@/components/search';
  import newTask from '@/components/addNewTask';
  import tasksList from '@/components/todo-list.vue';

  export default {
    extends: ajaxCalls,
    name: 'App',
    data() {
      return {
        tasks: [],
        search: '',
        searchOptions: false
      }
    },
    components: {
      search,
      newTask,
      tasksList
    },
    mounted() {
      this.axiosGetTasks()
          .then(response => {
            this.tasks = response.data
          })
    },
    methods: {
      updateSearch (updatedSearchValue) {
        this.search = updatedSearchValue;
      }
    }
  }
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
</style>
