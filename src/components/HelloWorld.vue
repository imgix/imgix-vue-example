<template>
  <div class="app">
    <img
      src="https://camo.githubusercontent.com/943dc6a9aeb753e1b4f8e1d7364f9b3559964a5d/68747470733a2f2f6173736574732e696d6769782e6e65742f73646b2d696d6769782d6c6f676f2e737667"
      width="100"
    />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
