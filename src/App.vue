<script setup name="app">
import home from "./views/home.vue";

</script>

<template>
  <div id="main">
    <home></home>
    <div class="leftbox">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#main {
  width: 100%;
  height: 100%;
  display: flex;

}
.leftbox {
  width: 100%;
  overflow: auto;
}
</style>
