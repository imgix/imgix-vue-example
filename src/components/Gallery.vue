<template>
  <div class="image-grid">
    <li v-for="(image, index) in images" v-bind:key="index">
      <ix-img
        v-bind:src="image"
        width="600"
        height="600"
        fixed
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        :imgixParams="{ fit: 'crop' }"
      />
    </li>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.image-grid {
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 10px;
  list-style: none;
}
.image-grid li {
  overflow: hidden;
}
</style>