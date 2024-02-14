'use client';
import { setGlobalState, useGlobalState, truncate } from '@/store';
import { AirdropContract, FroskaContract, checkContractBalance, checkHasClaimed, checkIsEligible, claim, connectWallet, depositAmount, getFounder, isWalletConnected, startTheAirdrop, withdrawRBalance } from '@/web3Services';
import { useEffect } from 'react';
import { GiDropEarrings } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';


const ClaimModal = () => {
    const [modal] = useGlobalState("modal")
    const [contractBalance] = useGlobalState("contractBalance")
    const [initDepositAmount] = useGlobalState("initDepositAmount")
    const [connectedAccount] = useGlobalState('connectedAccount');
    const [founderAccount] = useGlobalState('founderAccount');
    const [hasClaimed] = useGlobalState('hasClaimed');
    const [isEligible] = useGlobalState('isEligible');

    const handleModal = () => {
        setGlobalState("modal", !modal);
    };
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!initDepositAmount) {
            return;
        }
        try {
            await depositAmount(initDepositAmount)
        } catch (error) {
            console.log(error);
        }
    }

    const handleStart = async () => {
        try {
            await startTheAirdrop()
        } catch (error) {
            console.log(error);
        }
    }


    const handleWithdrawl = async () => {
        try {
            await withdrawRBalance()
        } catch (error) {
            console.log(error);
        }
    }

    const handleAirdropClaim = async () => {
        try {
            await claim()
        } catch (error) {
            console.log(error);
        }
    }

    const loadFuncs = async () => {
        await isWalletConnected()
        await FroskaContract()
        await AirdropContract()
        await getFounder()
        await checkHasClaimed()
        await checkContractBalance()
        await checkIsEligible()
    }

    useEffect(()=>{
        loadFuncs()
    },[connectedAccount,modal,contractBalance])


    return (
        <div className={modal ? 'block fixed top-0 right-0 bottom-0 rounded-tl-md shadow-xl  w-5/6 max-w-xl overflow-hidden bg-[#F3F4F5] dark:bg-[#1F1E1E] overflow-y-auto transition-transform duration-300' : 'hidden'}>
            {modal ? (
                <div className='flex items-center py-[17px] md:py-[20px] px-5 justify-between border-b-[1.5px] border-[#eaebec] dark:border-[#42454C]'>
                    <div className='block'>
                        <MdClose className='text-4xl dark:text-[#FFFFFF] text-[#1F1E1E]' onClick={() => handleModal()} />
                    </div>
                    {connectedAccount ?
                        <button className='cusor-none flex bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2.5   rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                            <span className='text-xs font-semibold'>
                                {truncate(connectedAccount, 6, 8, 17)}
                            </span>
                        </button>
                        :
                        <button onClick={connectWallet} className='flex bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2.5   rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                            <span className='text-xs font-semibold'>
                                Connect
                            </span>
                        </button>
                    }
                </div>
            ) : ''}
            <div className='gap-3 flex flex-col py-6 px-6 dark:text-[#FFFFFF] text-[#1F1E1E] '>
                <div className='flex justify-between items-center'>
                    <h1 className='font-GilroyBold text-lg md:text-xl '>Requirements</h1> <p className='font-GilroyRegular'>Bal: <span className='font-GilroyMedium'>{contractBalance} Froska</span></p>
                </div>
                <p className='font-GilroyRegular text-xs w-full md:w-11/12 pt-4 md:pt-2'>
                    Only <span className='font-GilroyBold '>MIP2/ MIP3 CEG voters, Metis Advocates and Nuvo Contributors: Nuvo AMA badge holders, Nuvo Festive Spirit participants, Nuvo Participation Badge holders</span> are eligible to claim FROSKA airdrop in this round. Claim end on 5th Feb 2024. Not eligible? There are 20 Million Froska allocated for future rewards,  follow Froska Twitter and join Telegram Community to stay updated.
                </p>

            </div>
        </div>
    )
}

export default ClaimModal