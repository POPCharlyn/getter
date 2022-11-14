<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Getters></Getters>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Getters from '@/components/Getters'

export default {
  name: 'HomeView',
  components: {
    Getters,
    HelloWorld
  }
}
</script>
