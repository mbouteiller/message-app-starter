<template>
  <div class="app">
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 25%;
  color: #343f50;
  display: inline-block;
  border: lightgray solid 2px;
}
</style>
