<template>
  <ix-picture>
    <ix-source
      src="sean-o-KMn4VEeEPR8-unsplash.jpg"
      media="(min-width: 768px)"
      :imgixParams="{ ar: '2:1', fit: 'crop' }"
    />
    <ix-source
      src="sean-o-KMn4VEeEPR8-unsplash.jpg"
      media="(min-width: 320px)"
      :imgixParams="{ ar: '1.5:1', fit: 'crop' }"
    />
    <ix-img
      src="sean-o-KMn4VEeEPR8-unsplash.jpg"
      :imgixParams="{ ar: '3:1', fit: 'crop' }"
    />
  </ix-picture>
</template>

<script>
export default {
  name: "Picture",
};
</script>