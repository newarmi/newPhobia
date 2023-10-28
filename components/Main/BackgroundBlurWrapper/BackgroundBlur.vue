<script setup lang="ts">
import {BackgroundCirclesItemStyle, BackgroundCirclesItemType} from "~/@types/interfaces";

defineProps<{
  styleParam: BackgroundCirclesItemStyle
  type: BackgroundCirclesItemType
}>()
</script>

<template>
  <span
    :style="styleParam"
    :class="type"
  />
</template>

<style scoped lang="scss">
.purple, .blue {
  height: 1100px;
  width: 1100px;
  display: block;
  border-radius: 50%;
}

.purple {
  opacity: 0.5;
  background: #612472;
  filter: blur(200px);
}

.blue {
  opacity: 0.5;
  background: #526AFF;
  filter: blur(200px);
}
</style>
