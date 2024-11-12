<template>
  <div class="home">
    <paper-search/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaperSearch from '@/components/PaperSearch.vue'

export default {
  name: 'HomeView',
  components: {
    PaperSearch
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
