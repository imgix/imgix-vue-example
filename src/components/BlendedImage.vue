<template>
  <div class="ix-blended">
    <ix-img
      v-bind:src="src"
      sizes="100vw"
      :imgixParams="{
        ar: '2:1',
        fit: 'crop',
        blend: blendSrc,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "BlendedImage",
  props: {
    src: String,
    blendSrc: String,
  },
};
</script>