import {keyWrapper} from "~/InjectionKeys";

export default () => {
  const isLayoutWrapper = ref(true)

  const useLayoutWrapper = ()=>{
    isLayoutWrapper.value = true
  }
  const useLayout = ()=>{
    isLayoutWrapper.value = false
  }
  provide(keyWrapper, {
    isLayoutWrapper,
    useLayoutWrapper,
    useLayout
  })

  const classConfig = reactive({
    layout__wrapper: isLayoutWrapper,
    layout:!isLayoutWrapper
  })

  return {
    isLayoutWrapper,
    classConfig
  }
}
