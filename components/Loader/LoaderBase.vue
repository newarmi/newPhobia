<script setup lang="ts">

</script>

<template>
  <div class="drop-loader">
    <svg ref="loaderSvg" width="400" height="200" viewBox="0 0 400 200">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7"
            result="cm"
          />
          <feComposite in="SourceGraphic" in2="cm" />
        </filter>
        <filter id="f2" x="-200%" y="-40%" width="400%" height="200%">
          <feOffset in="SourceAlpha" dx="9" dy="3" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.51" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#goo)" style="fill: #ffffff">
        <ellipse
          id="drop"
          ref="drop"
          cx="125"
          cy="90"
          rx="20"
          ry="20"
          fill-opacity="1"
          fill="#ededed"
        />
        <ellipse
          id="drop2"
          ref="drop2"
          cx="125"
          cy="90"
          rx="20"
          ry="20"
          fill-opacity="1"
          fill="#ededed"
        />
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.drop-loader {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
}

@media screen and (max-width: 991px) {
  .drop-loader {
    height: 60vh;
  }
}

@media screen and (max-width: 480px) {
  .drop-loader {
    height: 45vh;
  }
}
</style>
