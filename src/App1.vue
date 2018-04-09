<template>
  <div id="app">

    <section class="search">
      <div>
          <input
            type="text"
            name="search"
            id="search"
            v-model="search"
            :placeholder="translation.searchPlaceholder" />
      </div>
    </section>
    
    <section id="tasks-list">
      <ul>
        <li
          v-for="(task, key) in find"
          v-bind:description="task.description"
          :key="key"
          class="item">
            {{ task.description }} - {{ task.status ? translation.done : translation.todo }}

            <button v-on:click="changeStatus(task)">
              {{translation.changeOn}} {{ task.status ? translation.todo : translation.done }}
            </button>
            <button v-on:click="removeTask(key)">
              {{translation.remove}}
            </button>
        </li>
      </ul>
      <div v-show="search.length > 0 && find.length === 0">
        {{translation.notfound}} <strong>{{search}}</strong>
      </div>
    </section>

    <section class="newTask">
      <form @submit.prevent="addNewTask(newTaskModel)">
          <input type="text" v-model="newTaskModel" :placeholder="translation.newTaskPlaceholder" />
          <button :disabled="newTaskModel.length < 1" type="submit">
            {{translation.addNew}}
          </button>
      </form>
    </section>

    <div></div>

  </div>
</template>

<script>

  export default {

    name: 'App',
    data () {
      return {
        tasks: [
          { description: 'Lorem ipsum dolor', status: true },
          { description: 'Cras pharetra', status: true },
          { description: 'Donec sapien ligula', status: false },
          { description: 'Vivamus porta vulputate finibus', status: true },
          { description: 'Sed nisi turpis', status: true },
          { description: 'Phasellus consectetur ullamcorper', status: false },
          { description: 'Nunc vitae ligula eget enim', status: false }
        ],
        
        search: '',
        newTaskModel: '',
        translation: {
          changeOn: 'change status on: ',
          done: 'done',
          todo: 'to do',
          notfound: 'Unfortunately, there are no results for ',
          remove: 'remove',
          addNew: 'Add new',
          searchPlaceholder: 'tape the task name',
          newTaskPlaceholder: 'Enter the task name'
        }
      }
    },
    computed: {
      find() {
        return this.tasks.filter(data => {
          return data.description.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
    methods: {
      changeStatus (task) {
        task.status = !task.status
      },
      addNewTask (task) {
        if(task.length > 1) {
          this.tasks.push({
            description: task,
            status: false
          })
        }
      },
      removeTask (key) {
        this.tasks.splice(key, 1);
      }
  },
  }
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
  @import 'stylesheets/components/search.scss'
  @import 'stylesheets/components/tasks-list.scss'
  @import 'stylesheets/components/addNewTask.scss'
</style>
