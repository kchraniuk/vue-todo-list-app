<template>
  <section id="tasks-list">
    <ul>
      <li
        v-for="(task) in filteredTasksList"
        v-bind:description="task.description"
        :key="task.id"
        class="item">
          {{ task.description }} - {{ task.status ? translation.done : translation.todo }}

          <button v-on:click="changeStatus(task)">
            {{translation.changeOn}} {{ task.status ? translation.todo : translation.done }}
          </button>
          <button v-on:click="removeTask(task.id)">
            {{translation.remove}}
          </button>
      </li>
    </ul>

    <div class="no-result-info" v-show="search.length > 0 && filteredTasksList.length === 0">
        {{translation.notfound}} <strong>{{search}}</strong>
    </div>

  </section>
</template>

<script>
import ajaxCalls from '@/components/ajaxCalls'
import translation from '@/components/translation'

export default {
  extends: ajaxCalls,
  mixins: [translation],
  name: 'tasks-list',
  data: function() {
    return {
      filteredTasks: [],
    }
  },
  computed: {
    filteredTasksList () {
      return this.tasks.filter(data => {
        return data.description.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    changeStatus (task) {
      task.status = !task.status
    },
    removeTask (idItem) {
      this.axiosRemoveTask(idItem)
          .then(response => {
            let index = this.tasks.indexOf(idItem);
            this.tasks.splice(index, 1);
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

