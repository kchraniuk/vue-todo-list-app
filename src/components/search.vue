<template>
  <section class="search">
    <div>
        <input
          type="text"
          name="search"
          id="search"
          v-model="search"
          :placeholder="searchPlaceholder" />
    </div>
    <tasksList :tasks="find" :search="this.search"/>
  </section>
</template>

<script>
  import tasksList from '@/components/todo-list.vue'

  export default {
    name: 'Search',
    data() {
      return {
        searchPlaceholder: 'tape the task name',
        search: ''
      }
    },
    components: {
      tasksList
    },
    props: {
      tasks: {required: true}
    },
    // watch: {
    //   search(newVal, oldVal) {
    //     this.$emit('searchChange', newVal)
    //   }
    // },
    methods : {

    },
    computed: {
      find() {
        const filteredData = this.tasks.filter(data => {
         return data.description.toLowerCase().includes(this.search.toLowerCase());
        });
        return filteredData
      }
    }
  }
</script>

<style lang="sass">
  @import '../stylesheets/components/search.scss'
</style>

