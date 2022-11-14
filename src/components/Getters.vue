/**
* Monday 2022/11/14 10:41:29
* author: francesca
* email: 575525869@qq.com
* src/components/Getters.vue
*/
<template>
  <div class="getters">
    <h2>
      <span>sum:{{ this.$store.state.sum }}</span> ||
      <span>sum:{{ getStateSum }}</span> ||
    </h2>
    <h2>
      <span>address:{{ this.$store.state.address }}</span> ||
      <span>address:{{ getStateAddress }}</span> ||
    </h2>
    <h2>
      <span>getters: {{ this.$store.getters.bigSum }}</span> ||
      <span>getters:{{ getBigSum }}</span> ||
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Getters',
  computed: {
    getBigSum() {
      return this.$store.getters.bigSum
    },
    getStateSum() {
      return this.$store.state.sum
    },
    getStateAddress() {
      return this.$store.state.address
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
