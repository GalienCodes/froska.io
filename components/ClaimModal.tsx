'use client';
import { setGlobalState, useGlobalState, truncate } from '@/store';
import { AirdropContract, FroskaContract, checkContractBalance, checkHasClaimed, checkIsEligible, claim, connectWallet, depositAmount, getFounder, isWalletConnected, withdrawRBalance } from '@/web3Services';
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
        setGlobalState("initDepositAmount", '')
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

    useEffect(() => {
        isWalletConnected()
        FroskaContract()
        AirdropContract()
        getFounder()
        checkHasClaimed()
        checkContractBalance()
        checkIsEligible()
    }, [modal, connectedAccount,contractBalance])
 

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
                    Only <span className='font-GilroyBold '>registered </span> Metis contributors are allowed to claim.
                    As a token of appreciation, you've been awarded 6671 Froska tokens. Act fast – the claim deadline is two weeks! Your dedication fuels the Froska community's success.
                </p>
                {founderAccount.length != 0 ?
                    founderAccount === connectedAccount ? (
                        <>
                            <form onSubmit={handleSubmit}
                                className='flex border-[1px] border-[#FFFFFF] w-full md:w-11/12 rounded-tl-md rounded-md'>
                                <input
                                    name='initDepositAmount'
                                    onChange={(e) => setGlobalState("initDepositAmount", e.target.value)}
                                    value={initDepositAmount}
                                    type="number" placeholder='100'
                                    className='px-3 w-full bg-transparent outline-none' />
                                <button
                                    type='submit' className='flex cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 rounded-tr-md rounded-br-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs font-semibold'>
                                        Deposit
                                    </span>
                                </button>
                            </form >
                            {Number(contractBalance) != 0 ?
                                <button onClick={handleWithdrawl}
                                    type='submit' className='flex justify-center cursor-pointer dark:bg-[#FFFFFF] bg-[#1F1E1E] px-3 py-2 w-full md:w-11/12 text-center rounded-md dark:text-[#242529] text-[#FFFFFF]  items-center'>
                                    <span className='text-xs text-center font-semibold'>
                                        Withdraw All
                                    </span>
                                </button>
                                : ""}
                        </>
                    )
                        :
                        <div className='flex items-center pt-2.5'>
                            {isEligible === true?
                           ( hasClaimed === true ?
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
                                </button>)):
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
                            {isEligible === true?
                           ( hasClaimed === true ?
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
                                </button>)):
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