export default (flag: Ref<boolean>) => {
  const {$on} = useNuxtApp()

  $on('mainLoader:on', () => {
    flag.value = true;
  })
  $on('mainLoader:off', () => {
    flag.value = false;
  })
}
