import { Header } from '../components/Header'
import { Counter } from '../components/Counter'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Counter />
      <Footer />
    </div>
  )
}
