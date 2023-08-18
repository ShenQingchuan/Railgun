import { useAtomValue, useSetAtom } from 'jotai'
import { counterAtom } from '../atoms/counter'
import { useEventCallback } from '../hooks/useEventCallback'

export function Counter() {
  const setCount = useSetAtom(counterAtom)
  const increment = useEventCallback(() => setCount(c => c + 1))
  const decrement = useEventCallback(() => setCount(c => c - 1))

  return (
    <div className="flex justify-center items-center mt-4 mb-8">
      <button
        className="btn btn-ghost btn-circle text-[1.5rem] mx-2"
        onClick={increment}
      >
        <div className="i-carbon-add" data-test-id="count-inc-btn" />
      </button>
      <div
        data-test-id="count-display"
        className="
          px-4 py-2 mx-2
          border rounded-md
          border-slate-600/30 bg-slate-100/40
          dark:border-slate-400/30 dark:bg-slate-600/40
          select-none
        "
      >
        <samp>Count: <Count /></samp>
      </div>
      <button
        className="btn btn-ghost btn-circle text-[1.5rem] mx-2"
        data-test-id="count-dec-btn"
        onClick={decrement}
      >
        <div className="i-carbon-subtract" />
      </button>
    </div>
  )
}

function Count() {
  const count = useAtomValue(counterAtom)
  return count
}
