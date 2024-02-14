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
import { useGlobalState } from '@/store';
import { AirdropContract, FroskaContract, checkContractBalance, checkHasClaimed, checkIsEligible, getFounder, isWalletConnected } from '@/web3Services';
import { useEffect } from 'react';

export default function Home() {
  const [modal] = useGlobalState("modal")
  const [contractBalance] = useGlobalState("contractBalance")
  const [initDepositAmount] = useGlobalState("initDepositAmount")
  const [connectedAccount] = useGlobalState('connectedAccount');
  const [founderAccount] = useGlobalState('founderAccount');

  useEffect(() => {

    const loadFuncs = async () => {
      await isWalletConnected()
      await FroskaContract()
      await AirdropContract()
      await getFounder()
      await checkHasClaimed()
      await checkContractBalance()
      await checkIsEligible()
    }

    loadFuncs()

  }, [modal, connectedAccount, contractBalance])
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
