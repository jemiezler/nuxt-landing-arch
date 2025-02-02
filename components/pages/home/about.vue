<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

</script>

<template>
    <div class="pages images-background  items-center justify-center">
        <div class="flex lg:bg-[#FBFBFB] p-6 space-x-8">
            <div class="hidden lg:w-6/10 items-start justify-center">
                <img src="/images/1.jpg" class="w-full h-full object-cover" />
            </div>
            <div class="lg:w-4/10 items-start flex flex-col justify-between">
                <div>
                    <p class="uppercase text-5xl lg:text-6xl font-light" style="color: #bdbdbd;">About</p>
                    <p class="pt-4 font-light text-white lg:text-black">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem
                        Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to
                        make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting,
                        remaining essentially unchanged.</p>
                </div>

                <button class="h-[50px] mt-8 ld:mt-0 bottom-0 left-0 p-4 uppercase bg-white">
                    <div class="flex items-center space-x-2">
                        <p>View Project</p>
                        <ArrowRightIcon class="size-6" />
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.images-background{
    @apply bg-[url('/images/1.jpg')] bg-cover bg-center bg-no-repeat bg-black/85 bg-blend-overlay lg:bg-white bg-center items-center justify-center;
}
</style>