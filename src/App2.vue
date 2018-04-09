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

            <button v-on:click="changeStatus(key)">
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
      <form @submit.prevent="addTask(newTaskModel)">
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
  import axios from 'axios'
  export default {
   
    name: 'App',
    data () {
      return {
        tasks: [],       
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
    mounted() {
     this.getTasks()
  },
    computed: {
      find() {
        return this.tasks.filter(data => {
          return data.description.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
    methods: {
      changeStatus ( key ) {
        // const stat = !this.tasks[key].status
        // axios.put('http://localhost:3000/tasks/'+this.tasks[key].id+'/status/', {'status': stat})
        //   .then( response => {
        //     this.tasks[key].status = stat
        //   })
      },
      getTasks () {
          axios.get('http://localhost:3000/tasks')
            .then(response => {
              this.tasks = response.data
            })
        
      },
      addTask ( task ) {
        const data = {'description': task, 'status': false }
        axios.post( 'http://localhost:3000/tasks', data, {  headers: {'Content-Type': 'application/json'} })
          .then( response => {
            this.tasks.push( response.data )
          })
      },
      removeTask ( key ) {
        axios.delete('http://localhost:3000/tasks/'+this.tasks[key].id, { headers: {'Content-Type': 'application/json'} })
          .then( response => {
            this.tasks.splice(key, 1);
          })
    }
  }
}
</script>

<style lang="sass">
  @import "stylesheets/app.scss"
  @import 'stylesheets/components/search.scss'
  @import 'stylesheets/components/tasks-list.scss'
  @import 'stylesheets/components/addNewTask.scss'
</style>
