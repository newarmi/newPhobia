<script setup lang="ts">
defineProps<{ isLoad: boolean }>();
</script>

<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="!isLoad"
      class="page-holder"
    >
      <loader-base/>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.page-holder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: $backgroundColor;
  z-index: 9999;
}
</style>
