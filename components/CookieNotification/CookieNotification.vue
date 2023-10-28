<script setup lang="ts">
const isRender = ref(false)
onMounted(() => {
  isRender.value = !(localStorage.getItem('cookiesShowed'))
})
const close = () => {
  isRender.value = false
  localStorage.setItem('cookiesShowed', true)
}
</script>

<template>
  <transition name="slide-right" mode="out-in">
    <div v-if="isRender" class="cookie-notification">
      <p class="cookie-notification__desc">Мы используем куки, чтобы сайтом было удобно пользоваться</p>
      <button class="cookie-notification__button" @click="close">хорошо, спасибо</button>
      <button class="cookie-notification__button cookie-notification__button_icon" @click="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path fill="#FFFFFF" stroke="#FFFFFF" d="M18 2.762 2.762 18 2 17.238 17.238 2z"/>
          <path fill="#FFFFFF" stroke="#FFFFFF" d="M2.762 2 18 17.238 17.24 18 2 2.762z"/>
        </svg>
      </button>
    </div>
  </transition>
</template>

<style lang="scss">
.cookie-notification {
  position: fixed;
  right: 20px;
  bottom: 22px;
  z-index: 1000;

  padding: 28px 64px 28px 32px;

  background: linear-gradient(
      135.62deg,
      rgba(18, 12, 79, 0.69) 0%,
      rgba(34, 29, 88, 0.2) 18.22%,
      rgba(44, 39, 94, 0.11) 31.8%,
      rgba(0, 0, 0, 0) 63.31%,
      rgba(0, 0, 0, 0) 63.31%
  ),
  linear-gradient(
      298.24deg,
      #1053d6 -5.49%,
      rgba(10, 0, 144, 0.3) 19.56%,
      rgba(41, 37, 86, 0.14) 44.93%,
      rgba(15, 13, 32, 0.04) 70.72%,
      rgba(0, 0, 0, 0) 90.88%,
      rgba(0, 0, 0, 0) 90.88%
  ),
  linear-gradient(
      68.03deg,
      rgba(15, 15, 99, 0.13) 0.02%,
      rgba(15, 15, 99, 0.11) 19.71%,
      rgba(15, 15, 99, 0.21) 55.69%,
      rgba(0, 0, 0, 0) 100%
  ),
  linear-gradient(
      236.54deg,
      rgba(80, 118, 254, 0.82) 8.34%,
      rgba(18, 0, 251, 0.52) 39.13%,
      rgba(18, 0, 251, 0.507481) 49.88%,
      rgba(18, 0, 251, 0.5) 56.31%,
      rgba(14, 0, 194, 0.4) 71.26%,
      rgba(0, 0, 0, 0) 101.53%
  ),
  #ffffff;
  border-radius: 30px;

  &__desc {
    max-width: 214px;

    margin-bottom: 16px;

    color: var(--white);
    font-size: 15px;
    font-family: var(--font-stack-book);
    line-height: 22px;

    opacity: 0.6;
  }

  &__button {
    padding: 0;

    color: var(--white);
    font-size: 15px;
    font-family: var(--font-stack-book);
    line-height: 22px;

    background: none;
    border: 0;

    cursor: pointer;

    transition: opacity 0.2s ease;

    &:hover,
    &:focus {
      outline: none;
      opacity: 0.7;
    }

    &_icon {
      position: absolute;
      top: 0;
      right: 0;

      padding: 20px;

      line-height: 0;

      opacity: 0.5;

    }
  }
}

@media screen and (max-width: 768px) {
  .cookie-notification {
    bottom: 20px;
    left: 20px;

    padding: 20px 54px 20px 20px;

    &__desc {
      max-width: 247px;

      margin-bottom: 10px;

      font-size: 13px;
      font-family: var(--font-stack-book);
      line-height: 18px;
    }
  }
}
</style>
