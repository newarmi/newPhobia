<script setup lang="ts">
import useInitChangeMainWrapper from "~/composable/layout/useInitChangeMainWrapper";

const {classConfig} = useInitChangeMainWrapper()
</script>

<template>
  <div :class="classConfig"
  >
    <background-blur-wrapper/>
    <cookie-notification/>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  z-index: 1;
}

//=================
.layout__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;

  width: 100%;

  footer, header {
    width: 100%;
  }
}
</style>
