import {keyWrapper} from "~/InjectionKeys";

export default ()=>{
    const injectable = inject(keyWrapper)

    if(injectable){
      const {useLayout} = injectable
      useLayout()
    }
}
