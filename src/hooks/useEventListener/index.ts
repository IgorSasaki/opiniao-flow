import { useEffect, useState } from 'react'

import { CustomEventHandler } from '@/types/customEvents/common'
import { CustomEvents } from '@/types/customEvents/customEvents'
import { createCustomEvent } from '@/utils/helpers/customEvents/createCustomEvent'
import { deleteCustomEvent } from '@/utils/helpers/customEvents/deleteCustomEvent'

import { Handler } from './types'

export const useEventListener = <EventName extends keyof CustomEvents>(
  eventName: EventName,
  eventHandler: Handler<EventName>
) => {
  // @ts-expect-error - data is not defined in the initial state
  const [data, setData] = useState<CustomEvents[EventName]['data']>({})

  const handleSetData = <Data>(data: Data) => {
    setData(prev => ({
      ...prev,
      ...data
    }))
  }

  useEffect(() => {
    const handler: CustomEventHandler<CustomEvents[EventName]> = event => {
      if (event.detail.data) {
        handleSetData(event.detail.data)
      }

      eventHandler(event.detail)
    }

    createCustomEvent({
      eventName,
      handler
    })

    return () => {
      deleteCustomEvent({
        eventName,
        handler
      })
    }
  }, [eventName, eventHandler])

  return {
    data,
    setData
  }
}
