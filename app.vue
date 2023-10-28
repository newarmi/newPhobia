<template>
  <page-holder :isLoad="isLoad"/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import useInitMainLoader from "~/components/loader/PageHolder/composable/useInitMainLoader";

const isLoad = useInitMainLoader()
</script>
