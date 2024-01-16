'use client';
import Image from 'next/image'
import FroskaAirdrop from '../assets/froskaairdrop.png'
import { GiDropEarrings } from "react-icons/gi";
import { setGlobalState, useGlobalState } from '@/store';


const Claim = () => {
    const [modal] = useGlobalState("modal")

    return (
        <div id='Airdrop' className='max-w-5xl mx-6 lg:mx-auto bg-[#F3F4F5] rounded-md text-gray-50  my-10 py-10 px-0  md:px-16 '>
            <div className='mx-6 md:mx-4 xl:mx-0'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className='text-[#1F1E1E] w-full sm:w-1/2'>
                        <h1 className='font-GilroyBold text-lg md:text-xl'>Clain Airdrop</h1>
                        <p className='font-GilroyRegular text-xs  w-full md:w-11/12 pt-4 md:pt-2'>
                            As a token of appreciation, you've been awarded <span className='font-GilroyBold '>6671 Froska tokens</span>.
                            Act fast – the claim deadline is <span className='font-GilroyBold '>two weeks</span>! Your dedication fuels the Froska community's success.
                        </p>
                        <div className='mt-4 text-center sm:text-left w-full lg:w-2/5'>
                            <button onClick={() => setGlobalState("modal", !modal)} className='flex cursor-pointer bg-[#242529] px-3 py-2 rounded-md text-[#FFFFFF]  items-center'>
                                <span className='text-xs font-semibold'>
                                    Claim Airdrop
                                </span>
                                <GiDropEarrings className='flex items-center ml-2' size={18} />
                            </button>
                        </div>
                    </div>
                    <div className=' w-2/2 order-first sm:order-last'>
                        <Image className="w-[200px] h-[188px] mb-10 sm:mb-0" src={FroskaAirdrop} alt="rewards" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Claim