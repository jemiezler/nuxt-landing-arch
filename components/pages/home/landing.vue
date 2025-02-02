<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';


</script>
<template>
    <!-- Landing Page -->
    <div class="pages space-x-16">
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
            <img src="/images/1.jpg" class="w-full h-full object-cover" />
            <button class="h-[50px] absolute bottom-0 left-0 p-4 uppercase bg-white">
                <div class="flex items-center space-x-2">
                    <p>View Project</p>
                    <ArrowRightIcon class="size-6" />
                </div>
            </button>
        </div>
    </div>
</template>