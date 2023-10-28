import mitt from 'mitt'
import EventTypes from "~/plugins/eventBus/EventsTypes";

export default defineNuxtPlugin(() => {
  const {emit,on} = mitt<EventTypes>()

  return {
    provide: {
      emit,
      on
    }
  }
})
