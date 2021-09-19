<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <inicio />
  </div>
</template>

<script>
import Inicio from "./components/Inicio.vue";

export default {
  name: "App",
  components: {
    Inicio,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  background: #3399ff;
  padding: 20px;
}

ul li {
  background: #cce5ff;
  padding: 5px;
  margin-left: 35px;
}
</style>
