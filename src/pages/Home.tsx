import { Header } from '../components/Header'
import { Counter } from '../components/Counter'

export function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Counter />
    </div>
  )
}
