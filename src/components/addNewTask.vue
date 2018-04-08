<template>
  <section class="newTask">
    <form @submit.prevent="addNewTask(newTaskModel)">
        <input type="text" v-model="newTaskModel" :placeholder="newTaskPlaceholder" />
        <button :disabled="newTaskModel.length < 1" type="submit">Add new</button>
    </form>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'newTask',
    methods: {
      addNewTask (task) {

        if ( task.length > 1 ) {
           let newTask = { 'description': task, 'status': false }           
           this.addTask( newTask )
        }
      },
      
      addTask( data ) {
        axios.post( 'http://localhost:3000/tasks', data, { 
          headers: {'Content-Type': 'application/json'} 
        })
        .then( response => {
          this.tasks.push( data )
        })
      }
    },
    data() {
      return {
        newTaskModel: '',
        newTaskPlaceholder: 'Enter the task name'
      }
    },
    props: {
      tasks: {required: true}
    }
  }
</script>

<style lang="sass">
  @import '../stylesheets/components/addNewTask.scss'
</style>

