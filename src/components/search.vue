<template>
  <section class="search">
    <div>
      <!-- v-model is just syntactic sugar for: <input v-bind:value="something" v-on:input="something = $event.target.value"> -->
      <input
        type="text"
        v-on:input="searchHandler"
        v-model="search"
        :placeholder="translation.searchPlaceholder"
      />
    </div>
  </section>
</template>

<script>
  import translation from '@/components/translation'

  export default {
    mixins: [translation],
    name: 'Search',
    data() {
      return {
        search: ''
      }
    },
    methods: {
      searchHandler (value) {
        this.$emit('emitSearchValue', this.search);
      }
    }

  }
</script>

<style lang="sass">
  @import '../stylesheets/components/search.scss'
</style>

