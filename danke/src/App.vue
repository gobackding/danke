<template>
  <div id="app">
    <Header></Header>
    <search v-if="$route.meta.flag"></search>
     <router-view></router-view> 
    <Bottom v-if="$route.meta.flag1"></Bottom>

  </div>
</template>

<script>
    
export default {
  name:"App",
 
}
</script>
<style>
 
</style>