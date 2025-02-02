<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
const upperImages = ref([
  '/images/1.jpg',
  'https://www.gstatic.com/webp/gallery/1.webp',
]);

const lowerImages = ref([
  'https://www.gstatic.com/webp/gallery/2.webp',
  'https://www.gstatic.com/webp/gallery/3.webp',
  'https://www.gstatic.com/webp/gallery/4.webp',

]);
</script>

<template>
  <div class="pages lg:flex-col max-h-full  space-y-4">
    <!-- Title -->
    <p class="text-5xl lg:text-6xl font-light text-[#bdbdbd]">Our Projects</p>

    <!-- Gallery Container -->

    <!-- Upper Row: 2 images
     <div class="flex flex-col gap-4">
      <div class="flex gap-4">
      <img src="/images/1.jpg" alt="Project Image 1" class="object-cover" />
      <img src="https://www.gstatic.com/webp/gallery/1.webp" alt="Project Image 2"
        class=" object-cover" />
    </div>

    Lower Row: 3 images
    <div class="flex gap-4">
      <img src="https://www.gstatic.com/webp/gallery/3.webp" alt="Project Image 3"
        class=" object-cover w-full " />
      <img src="https://www.gstatic.com/webp/gallery/4.webp" alt="Project Image 4"
        class=" object-cover w-full " />
      <img src="https://www.gstatic.com/webp/gallery/5.webp" alt="Project Image 5"
        class="flex object-cover w-full " />
    </div>
     </div> -->
     

    <div class=" lg:gallery-container">
      <!-- Upper row (2 images) -->
      <!-- <div class="gallery-row gallery-upper">
        <div v-for="(img, index) in upperImages" :key="index" class="gallery-item w-1/2">
          <img :src="img" class="gallery-image" />
        </div>
      </div> -->

      <!-- Lower row (3 images) -->
      <div class="space-y-4 lg:gallery-row lg:gallery-lower">
        <div v-for="(img, index) in lowerImages" :key="index" class="lg:gallery-item lg:w-1/3">
          <img :src="img" class="gallery-image" />
        </div>
      </div>
    </div>




    <!-- Button -->
    <button class="p-4 uppercase bg-[#333333] w-fit">
      <div class="flex items-center space-x-2 text-white">
        <p>View Project</p>
        <ArrowRightIcon class="w-6 h-6" />
      </div>
    </button>
  </div>

</template>
<style scoped>
/* Make sure the gallery takes up full remaining height */
.gallery-container {

  /* Adjust 6rem if your header height is different */
  display: flex;
  flex-direction: column;

}

/* Upper row should take half height */
.gallery-upper {
  flex: 1;
  display: flex;
}

/* Lower row should take half height */
.gallery-lower {
  flex: 1;
  display: flex;
}

/* Each image container takes up its required space */
.gallery-item {
  position: relative;
  overflow: hidden;
}

/* Images should cover their container without distortion */
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>