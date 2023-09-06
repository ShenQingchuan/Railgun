import { useCallback, useEffect, useRef } from 'react'

export function useEventCallback<T extends (...args: any[]) => any>(
  fn: T,
  deps: any[],
) {
  const callbackRef = useRef<T>(fn)

  useEffect(() => {
    callbackRef.current = fn
  }, [fn, ...deps])

  return useCallback((...args: Parameters<T>) => {
    const fn = callbackRef.current
    return fn(...args)
  }, [callbackRef])
}
