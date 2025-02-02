<template>

    <div class="grid pt-24 min-w-screen min-h-screen">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
    <SpeedInsights />
</template>
<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>