<template>
  <div class="ix-examples">
    <div class="hero-image">
      <h3>Hero Image</h3>
      <ix-img
        rel="image_src"
        src="derek-thomson-TWoL-QCZubY-unsplash.jpg"
        sizes="100vw"
        :imgixParams="{ ar: '2:1', fit: 'crop', q: 35 }"
      />
    </div>
    <h3>Picture Element</h3>
    <Picture />
    <h3>Image Gallery</h3>
    <Gallery
      v-bind:images="[
        'rowan-heuvel-U6t80TWJ1DM-unsplash.jpg',
        'hermansyah-7uXn7nudorc-unsplash.jpg',
        'elizeu-dias-RN6ts8IZ4_0-unsplash.jpg',
        'chris-galbraith-7XAM0J3dNQM-unsplash.jpg',
        'sean-o-KMn4VEeEPR8-unsplash.jpg',
        'lance-asper-woDxDNvpmdk-unsplash.jpg',
        'pierce-gainey-OHLF1pOJyQc-unsplash.jpg',
        'pilar-gonzalez-prieto-FA6EbgdxV3s-unsplash.jpg',
      ]"
    />
    <h3>Blended Image</h3>
    <BlendedImage
      v-bind:src="'mockup-graphics-ZBXPPacUsVs-unsplash.jpg'"
      v-bind:blendSrc="'katie-mcnabb-jKTGAGp7goM-unsplash.jpg'"
    />
  </div>
</template>

<script>
import Gallery from "./Gallery";
import BlendedImage from "./BlendedImage";
import Picture from "./Picture";

export default {
  components: {
    Gallery,
    BlendedImage,
    Picture,
  },
  name: "ImgixExamples",
};
</script>