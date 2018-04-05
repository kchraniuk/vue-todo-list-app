<template>
  <section id="tasks-list">
    <ul>
      <li
        v-for="(task, key) in tasks"
        v-bind:description="task.description"
        :key="key"
        class="item">
          {{ task.description }} - {{ task.status ? translation.done : translation.todo }}

          <button v-on:click="changeStatus(task)">
            {{translation.changeOn}} {{ task.status ? translation.todo : translation.done }}
          </button>
      </li>
    </ul>
    <div v-show="search.length > 0 && tasks.length === 0">{{translation.notfound}} <strong>{{search}}</strong></div>
  </section>
</template>

<script>
export default {
  name: 'tasks-list',
  data: function() {
    return {
      translation:{
          changeOn: 'change status on: ',
          done: 'done',
          todo: 'to do',
          notfound: 'Unfortunately, there are no results for '
      }
    }
  },
  methods: {
    changeStatus (task) {
      task.status = !task.status
    }
  },
  props: {
     tasks: {required: true},
     search: {required: true}
  }
}
</script>

<style lang="sass">
  @import '../stylesheets/components/tasks-list.scss'
</style>

