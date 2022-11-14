<template>
  <div class="home">
    <Getters/>
    <Actions/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Getters from '@/components/Getters'
import Actions from '@/components/Actions'

export default {
  name: 'HomeView',
  components: {
    Actions,
    Getters,
    HelloWorld,
  },
}
</script>
