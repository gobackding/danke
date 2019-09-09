<template>
  <div id="app">
  <Header v-if="$route.meta.header"></Header>
    <search v-if="$route.meta.search"></search>
  <Bottom v-if="$route.meta.search"></Bottom>
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
    name:"App",

}
</script>
<style >
  #app{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
