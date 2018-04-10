<template>
  <section class="search">
    <div>
      <input
        type="text"
        v-model="search"
        :placeholder="translation.searchPlaceholder" />
    </div>
   <tasksList :tasks="tasks" :search="search"/>
  </section>
</template>

<script>
  import tasksList from '@/components/todo-list.vue'
  import translation from '@/components/translation'

  export default {
    mixins: [translation],
    name: 'Search',
    data() {
      return {
        search: ''
      }
    },
    components: {
      tasksList
    },
    props: {
      tasks: {required: true}
    }
  }
</script>

<style lang="sass">
  @import '../stylesheets/components/search.scss'
</style>

