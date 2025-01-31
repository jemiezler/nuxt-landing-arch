<template>
    <AppHeader />
    <div class="pt-24">
        <slot />
    </div>
    <SpeedInsights/>
    <AppFooter />
</template>
<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>