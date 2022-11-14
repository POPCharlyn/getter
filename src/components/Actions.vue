/**
* Monday 2022/11/14 13:47:36
* author: francesca
* email: 575525869@qq.com
* src/components/Actions.vue
*/
<template>
  <div class="">
    <el-select v-model="num" value="">
      <el-option value="1">1</el-option>
      <el-option value="2">2</el-option>
      <el-option value="3">3</el-option>
    </el-select>
    <el-button @click="increment" type="success" round>increment</el-button>
    <el-button @click="decrement" type="primary" icon="el-icon-edit">decrement</el-button>
    <el-button @click="surplus" type="primary" icon="el-icon-share">surplus</el-button>
    <el-button @click="addAsync" type="primary" icon="el-icon-delete">addAsync</el-button>
    <el-button type="primary" icon="el-icon-search"></el-button>
    <el-button type="primary"><i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
export default {
  name: 'Actions',
  data() {
    return {
      num: 9,
    }
  },
  methods: {
    increment() {
      console.log( 'increment' )
      this.$store.dispatch( 'add', this.num )
    },
    decrement() {
      console.log( 'decrement' )
      this.$store.commit( 'Reduce', this.num )
    },
    surplus() {
      this.$store.dispatch( 'surplus', this.num )
    },
    addAsync() {
      this.$store.dispatch( 'addAsync', this.num )
    },
  },
}
</script>

<style lang="scss" scoped>
el-button {
  margin-left: 10px;
}
</style>
