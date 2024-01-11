import Dev from '@/components/Dev'
import Distribution from '@/components/Distribution'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
// import NavBar from '@/components/NavBar'
import Symbol from '@/components/Symbol'

export default function Home() {
  return (
    <div className='globalFont'>
      {/* <NavBar/> */}
      <Hero/>
      <Symbol/>
      <Mission/>
      <Distribution/>
      <Dev/>
      <Footer/>
    </div>
  )
}
