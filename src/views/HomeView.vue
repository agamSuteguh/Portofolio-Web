<template>
  <div class="home">
    <HomeView/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from '@/components/IndexView.vue'

export default {
  name: 'HomeView',
  components: {
    HomeView
  }
}
</script>
