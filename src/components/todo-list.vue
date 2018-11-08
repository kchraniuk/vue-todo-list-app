<template>
  <section id="tasks-list">
    <ul>
      <task
        v-for="(item, index) in filteredTasksList"
        v-bind:key="item.id"
        v-bind:index="index"
        v-bind:item="item"
        v-bind:tasks="tasks"
        v-bind:editState="editState"
        v-bind:changeEditState="setEditState"
      />
    </ul>
    <noResultInfo
      :search="search"
      :filteredTasksList="filteredTasksList"
    />
  </section>
</template>

<script>
import translation from '@/components/translation'
import task from '@/components/task'
import noResultInfo from '@/components/noResultInfo'
import helpers from '@/components/helpers'

export default {
  mixins: [helpers, translation],
  name: 'tasks-list',

  components: {
    task,
    noResultInfo,
  },
  data() {
    return {
      editState: false
    }
  },
  computed: {

    filteredTasksList () {
      const filteredData = this.tasks.filter(data => {
        return data.description.toLowerCase().includes(this.search.toLowerCase());
      });
      return this.sortData(filteredData, 'dateAdded', 'desc');
    },

  },

  props: {
     tasks: {
       type: Array,
       required: true
     },
     search: {
       type: String,
       required: true
     }
  },

  methods: {
    setEditState(value) {
      this.editState = value;
    }
  }
}
</script>

<style lang="sass">
  @import '../stylesheets/components/tasks-list.scss'
</style>

