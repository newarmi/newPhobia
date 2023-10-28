export default defineNuxtConfig({
  devtools: {enabled: true},
  css:["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/fonts.scss";\n' +
            '@import "assets/scss/vars.scss";\n' +
            '@import "assets/scss/anims.scss";',
        },
      },
    },
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/nested
      pathPrefix: false,
    },
  ],
  plugins: [
    // { src: "~/plugins/gsap.client.ts", mode: "client" },
    '~/plugins/eventBus/index.ts'
  ],
})
