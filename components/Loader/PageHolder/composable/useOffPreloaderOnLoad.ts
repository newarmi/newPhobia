export default (flag: Ref<boolean>) => {
  onMounted(() => {
    flag.value = true;
  });
}
