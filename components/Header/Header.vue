<script setup lang="ts">

</script>

<template>
  <template>
    <header
      class="header"
    >
      <div class="header__layer"></div>
<!--      <lazy-auth-vue-->
<!--        v-if="isAuthOpen"-->
<!--        :open="isAuthOpen"-->
<!--        @close="isAuthOpen = false"-->
<!--      />-->
      <div class="header__nav-wrapper">
<!--        <proxy-nuxt-link class="header__logo" to="/" aria-label="Перейти на главную страницу">-->
<!--          <svg width="174" height="34">-->
<!--            <use href="#logo"></use>-->
<!--          </svg>-->
<!--        </proxy-nuxt-link>-->
<!--        <twig-nav-navigation-->
<!--          @selectValue="selectCityValue"-->
<!--          :menus="getHeaderMenus"-->
<!--          :selected-city="selectedCity"-->
<!--          :isAuthOpen.sync="isAuthOpen"-->
<!--        />-->
      </div>
      <div class="header__info">
        <div :class="['header__city', {'hidden': !getIsSuperuser }]">
<!--          <ui-dropdown-->
<!--            label="Москва"-->
<!--            @selectValue="selectCityValue"-->
<!--            :options="getCities"-->
<!--            :selected-value="getSelectedCity"-->
<!--            :icon="$options.ICON"-->
<!--            iconPos="left"/>-->
        </div>
        <a
          class="header__link zphone phone_class"
          href="tel:+74994605420"
          data-phone
        >
          +7 (499) 460-54-20
        </a>
        <button
          v-if="!getIsAuth"
          type="button"
          class="header__button"
          data-auth-button @click="isAuthOpen = true"
        >
          войти
        </button>
        <a
          v-else
          :href="profileLink"
          :class="['header__link', {'header__link-crown': getIsSuperuser }]"
          data-username
        >Timur</a>
        <!--      Temporarily disabled here and in header.js-->
        <div :class="['header__lang', {'hidden': !getIsSuperuser }]">
<!--          <ui-dropdown-->
<!--            label="Язык"-->
<!--            @selectValue="selectLanguageValue"-->
<!--            :options="languageOptions"-->
<!--            :selected-value="selectedLanguage"/>-->
        </div>
        <button
          @click="$emit('toggleSearch')"
          type="button"
          class="header__button header__button_icon"
        >
          <img
            v-if="searchOpen"
            loading="lazy"
            :src="iconClose"
            alt="close_icon"
          />
          <svg width="24" height="24" v-else>
            <use href="#search"></use>
          </svg>
        </button>
        <button type="button" class="burger" data-burger>
        </button>
      </div>
    </header>
  </template>
</template>

<style scoped lang="scss">

</style>
