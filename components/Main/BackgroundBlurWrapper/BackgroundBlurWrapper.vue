<script setup lang="ts">
import useChangeHandler from "~/components/Main/BackgroundBlurWrapper/composable/useChangeHandler";
import useCurrentShema from "~/components/Main/BackgroundBlurWrapper/composable/useCurrentShema";
import {BackgroundCirclesType} from "~/@types/interfaces";

let circles = ref<BackgroundCirclesType>([])

useChangeHandler(circles)
const {schema} = useCurrentShema()

const getCircles = computed(() => {
  return circles.value
    .filter(circle => schema.value in circle.style)
})
</script>

<template>
  <div class="background-blur__wrapper">
      <background-blur
        v-for="(circle, index) in getCircles"
        :key="`background-circle-${index}`"
        :styleParam="circle.style[schema]"
        :type="circle.type"
      />
  </div>
</template>

<style scoped lang="scss">
.background-blur__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  overflow: hidden;

  > img {
    width: 76.38rem;
    height: 76.38rem;
    object-fit: contain;
    object-position: center;
    position: absolute;
  }
}
</style>
