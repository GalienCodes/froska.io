'use client';
import Alert from '@/components/Alert'
import Distribution from '@/components/Distribution'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LegacyVision from '@/components/LegacyVision'
import LoadData from '@/components/LoadData'
import Mission from '@/components/Mission'
import Symbol from '@/components/Symbol'
import Tokenomics from '@/components/Tokenomics'


export default function Home() { 
  return (
    <div >
      <Hero />
      <Symbol />
      <LegacyVision />
      <Mission />
      <Tokenomics />
      <Distribution />
      <Alert />
      <LoadData />
      <Footer />
    </div>
  )
}
