import useOffPreloaderOnLoad from "~/components/loader/PageHolder/composable/useOffPreloaderOnLoad";
import useRegistarGlobalEventEmmiter
  from "~/components/loader/PageHolder/composable/useRegistarGlobalEventEmmiter";

export default () => {
  const isLoad = ref(false);

  useOffPreloaderOnLoad(isLoad)
  useRegistarGlobalEventEmmiter(isLoad)

  return isLoad
}
