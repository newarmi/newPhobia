<script setup lang="ts">
import {CIRCLES_INDEX_PAGE} from "~/constants/backgroundCircles.ts";

const route = useRoute()
const {$emit} = useNuxtApp()
$emit('wrapper-circles:change', CIRCLES_INDEX_PAGE)
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
