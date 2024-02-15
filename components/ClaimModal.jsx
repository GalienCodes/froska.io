'use client';
import { setGlobalState, useGlobalState, truncate } from '@/store';
import { AirdropContract, ApproveAmount, FroskaContract, checkContractBalance, checkHasClaimed, checkIsEligible, claim, connectWallet, depositAmount, getFounder, isWalletConnected, startTheAirdrop, withdrawRBalance } from '@/web3Services';
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
    const handleSubmit = async (e) => {
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

    const handleApproval = async (e) => {
        e.preventDefault();
        if (!initDepositAmount) {
            return;
        }
        try {
            await ApproveAmount(initDepositAmount)
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
                    <h1 className='font-GilroyBold text-lg md:text-xl '>Requirements</h1> <p className='font-formGilroyRegular'>Bal: <span className='font-GilroyMedium'>{contractBalance} Froska</span></p>
                </div>
                <p className='font-GilroyRegular text-xs w-full md:w-11/12 pt-4 md:pt-2'>
                    Only <span className='font-GilroyBold '>MIP2/ MIP3 CEG voters, Metis Advocates and Nuvo Contributors: Nuvo AMA badge holders, Nuvo Festive Spirit participants, Nuvo Participation Badge holders</span> are eligible to claim FROSKA airdrop in this round. Claim starts on 15th feb to 1st march. Not eligible? There are 20 Million Froska allocated for future rewards,  follow Froska Twitter and join Telegram Community to stay updated.
                </p>
                {founderAccount.length != 0 ?
                    founderAccount === connectedAccount ? (
                        <>
                        <form >
                            <div 
                                className='flex border-[1px] border-[#FFFFFF] w-full md:w-11/12 rounded-tl-md rounded-md'>
                                <input
                                    name='initDepositAmount'
                                    onChange={(e) => setGlobalState("initDepositAmount", e.target.value)}
                                    value={initDepositAmount}
                                    type="number" placeholder='100'
                                    className='px-3 w-full bg-transparent outline-none' />
                                <button onClick={handleApproval}
                                    type='submit' className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-tr-md rounded-br-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                      (1) Approve
                                    </span>
                                </button>
                            </div >
                            <div  className='w-full md:w-11/12 rounded-tl-md py-2 rounded-md'>
                            <button onClick={handleSubmit}
                                    type='submit' className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-tr-md rounded-br-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                      (2) Deposit
                                    </span>
                                </button>
                            </div>
                        </form>
                            {Number(contractBalance) != 0 ?
                                <div className='flex flex-col md:flex-row gap-2 h-full md:w-11/12 items-center'>
                                    <button
                                        onClick={handleStart}
                                        type='submit' className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] w-full  text-center text-[#FFFFFF]  items-center'>
                                        <span className='text-[12.5px] font-semibold'>
                                            Start Airdrop
                                        </span>
                                    </button>
                                    <button onClick={handleWithdrawl}
                                        type='submit' className='mt-3 md:mt-0 flex justify-center cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 w-full  text-center rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                        <span className='text-xs text-center font-semibold'>
                                            Withdraw All
                                        </span>
                                    </button>
                                </div>
                                : ""}
                        </>
                    )
                        :
                        <div className='flex items-center pt-2.5'>
                            {isEligible === true ?
                                (hasClaimed === true ?
                                    (<button
                                        disabled
                                        className='flex dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                        <span className='text-xs font-semibold'>
                                            Already Caimed
                                        </span>
                                        <GiDropEarrings className='flex items-center ml-2' size={18} />
                                    </button>)
                                    :
                                    (<button
                                        onClick={handleAirdropClaim}
                                        className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                        <span className='text-xs font-semibold'>
                                            Claim Airdrop
                                        </span>
                                        <GiDropEarrings className='flex items-center ml-2' size={18} />
                                    </button>)) :
                                (<button
                                    disabled
                                    className='flex dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                        You're Not Eligible To Claim
                                    </span>
                                    <GiDropEarrings className='flex items-center ml-2' size={18} />
                                </button>)
                            }
                        </div>
                    :
                    <div className='flex items-center pt-2.5'>
                        {isEligible === true ?
                            (hasClaimed === true ?
                                (<button
                                    disabled
                                    className='flex dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                        Already Caimed
                                    </span>
                                    <GiDropEarrings className='flex items-center ml-2' size={18} />
                                </button>)
                                :
                                (<button
                                    onClick={handleAirdropClaim}
                                    className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                        Claim Airdrop
                                    </span>
                                    <GiDropEarrings className='flex items-center ml-2' size={18} />
                                </button>)) :
                            (<button
                                disabled
                                className='flex dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                <span className='text-xs font-semibold'>
                                    You're Not Eligible To Claim
                                </span>
                                <GiDropEarrings className='flex items-center ml-2' size={18} />
                            </button>)
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default ClaimModal