<template>
  <div class="home">
    <WorkView/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkView from '@/components/FeaturedWorkView.vue'

export default {
  name: 'WorkViews',
  components: {
    WorkView
  }
}
</script>
