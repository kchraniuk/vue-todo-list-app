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
          <button v-on:click="removeTask(key)">{{translation.remove}}</button>
      </li>
    </ul>
    <div v-show="search.length > 0 && tasks.length === 0">{{translation.notfound}} <strong>{{search}}</strong></div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'tasks-list',
  data: function() {
    return {
      translation:{
          changeOn: 'change status on: ',
          done: 'done',
          todo: 'to do',
          remove: 'remove',
          notfound: 'Unfortunately, there are no results for '
      }
    }
  },
  methods: {
    changeStatus (task) {
      task.status = !task.status
    },
    removeTask (key) {
      axios.delete('http://localhost:3000/tasks/'+tasks[key].id)
        .then( response => {
          this.$delete(tasks, key);
        })
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

