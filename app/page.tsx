'use client';
import Alert from '@/components/Alert'
import Claim from '@/components/Claim'
import ClaimModal from '@/components/ClaimModal'
import ClipboardCopy from '@/components/ClipboardCopy'
import Dev from '@/components/Dev'
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
      <ClaimModal />
      <Hero />
      <Symbol />
      <LegacyVision />
      <Mission />
      <Tokenomics />
      <Distribution />
      <Claim />
      <Alert />
      <LoadData />
      {/* <ClipboardCopy/> */}
      <Footer />
    </div>
  )
}
