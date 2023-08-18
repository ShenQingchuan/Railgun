import { useAtom } from 'jotai'
import { counterAtom } from '../jotais/counter'

export function Counter() {
  const [count, setCount] = useAtom(counterAtom)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)

  return (
    <div className='flex justify-center items-center mt-4 mb-8'>
      <button
        className="btn btn-ghost btn-circle text-[1.5rem] mx-2"
        onClick={increment}
      >
        <div className='i-carbon-add' data-test-id="count-inc-btn" />
      </button>
      <div
        data-test-id="count-display"
        className='
          px-4 py-2 mx-2
          border rounded-md
          border-slate-600/30 bg-slate-100/40
          dark:border-slate-400/30 dark:bg-slate-600/40
          select-none
        '
      >
        <samp>Count: {count}</samp>
      </div>
      <button
        className="btn btn-ghost btn-circle text-[1.5rem] mx-2"
        data-test-id="count-dec-btn"
        onClick={decrement}
      >
        <div className='i-carbon-subtract' />
      </button>
    </div>
  )
}
