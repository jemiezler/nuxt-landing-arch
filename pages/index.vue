<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: 'Index Page',
  description: 'This is the index page',
})
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <!-- Landing Page -->
  <div class="pages pb-24">
    <div class="w-4/10 items-start justify-center flex flex-col">
      <p class="uppercase text-6xl font-light" style="color: #bdbdbd;">Project</p>
      <p class="uppercase text-5xl font-semibold" style="color: #333;">Lorum</p>
      <div class="flex space-x-4 pt-16">
        <button class="w-[50px] h-[50px] border p-4 border-[#f2f2f2] border-2">
          <ArrowLeftIcon />
        </button>
        <button class="w-[50px] h-[50px] border p-4 border-[#f2f2f2] border-2">
          <ArrowRightIcon />
        </button>
      </div>
    </div>
    <div class="relative w-6/10 ">
      <NuxtImg src="/images/1.jpg" class="w-full h-full object-cover" />
      <button class="h-[50px] absolute bottom-0 left-0 p-4 uppercase bg-white">
        <div class="flex items-center space-x-2">
          <p>View Project</p>
          <ArrowRightIcon class="size-6" />
        </div>
      </button>
    </div>
  </div>

  <!-- About Us -->

  <div class="pages items-center justify-center">
    <div class="flex bg-[#FBFBFB] p-6 space-x-8">
      <div class="w-6/10 items-start justify-center">
        <NuxtImg src="/images/1.jpg" class="w-full h-full object-cover" />
      </div>
      <div class="w-4/10 items-start flex flex-col justify-between">
        <div>
          <p class="uppercase text-6xl font-light" style="color: #bdbdbd;">About</p>
          <p class="pt-4 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting,
            remaining essentially unchanged.</p>
        </div>

        <button class="h-[50px] bottom-0 left-0 p-4 uppercase bg-white">
          <div class="flex items-center space-x-2">
            <p>View Project</p>
            <ArrowRightIcon class="size-6" />
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Mission -->
  <div class="pages items-center justify-center">
    <div class="w-full bg-[#FBFBFB] p-6 space-x-8">
      <p class="text-6xl font-light" style="color: #bdbdbd;">Main Focus/Mission Statement</p>
      <div class="flex space-x-16 pt-8">
        <div class="flex space-x-4 w-1/2 items-center">
          <p class="text-8xl font-bold">1</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        </div>
        <div class="flex space-x-4 w-1/2 items-center">
          <p class="text-8xl font-bold">2</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna
            mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Project -->
  <!-- <div class="pages flex-col items-center justify-center space-y-6">
    <div>
      <p class="text-6xl font-light" style="color: #bdbdbd;">Our Projects</p>
      <div class="grid grid-cols-2 gap-4">
        <div class="grid grid-cols-2 gap-4">
          <NuxtImg src="/images/1.jpg" class="w-full h-full object-cover" />
          <NuxtImg src="https://www.gstatic.com/webp/gallery/1.webp" class="w-full h-full object-cover" />
        </div>
        <div class="flex gap-4">
          <NuxtImg src="https://www.gstatic.com/webp/gallery/3.webp" class="w-full h-full object-cover" />
          <NuxtImg src="https://www.gstatic.com/webp/gallery/4.webp" class="w-full h-full object-cover" />
          <NuxtImg src="https://www.gstatic.com/webp/gallery/5.webp" class="w-full h-full object-cover" />
        </div>
      </div>

      <button class="p-4 uppercase bg-[#333333] w-fit">
        <div class="flex items-center space-x-2 text-white">
          <p>View Project</p>
          <ArrowRightIcon class="size-6" />
        </div>
      </button>
    </div>

    </div> -->
</template>
