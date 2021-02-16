<template>
  <div id="app">
    <HelloWorld msg="imgix-vue example app" />
    <ImgixExamples />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ImgixExamples from "./components/ImgixExamples.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ImgixExamples,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding: 0;
  margin: 0;
}
</style>
