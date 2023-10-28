import {useWindowSize} from "@vueuse/core";


export default () => {
  const {width} = useWindowSize()
  const schema = computed(() => {
    if (width.value <= 480) {
      return 'mobile'
    } else if (width.value <= 991) {
      return 'tablet'
    }
    return 'desktop'
  })
  return {
    schema
  }
}
