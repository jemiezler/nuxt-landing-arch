<template>
    <div class="fixed w-screen h-24 top-0 z-50 items-center justify-center bg-white">
        <div class="h-full flex justify-between items-center px-24 ">
            <div class="app-header__logo">
                <NuxtLink  to="/">
                    <p>This is Logo</p>
                </NuxtLink >
            </div>
            <div class="flex space-x-10 tracking-[0.2rem] uppercase text-xs font-normal text-primary">
                <NuxtLink  to="/">Main</NuxtLink >
                <NuxtLink  to="/gallery">Gallery</NuxtLink >
                <NuxtLink  to="/projects">Projects</NuxtLink >
                <NuxtLink  to="/certifications">Certifications</NuxtLink >
                <NuxtLink  to="/contacts">Contacts</NuxtLink >
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>