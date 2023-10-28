import {BackgroundCirclesType} from "~/@types/interfaces";

export default (circles: Ref<BackgroundCirclesType>) => {
  const {$on} = useNuxtApp()

  $on('wrapper-circles:change', function (newCircle: BackgroundCirclesType) {
    circles.value = newCircle
  })
}
