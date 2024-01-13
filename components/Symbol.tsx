import React from 'react'
import reward from '../assets/reward.png'
import Image from 'next/image'

const Symbol = () => {
    return (
        <div className='max-w-5xl mx-6 md:mx-auto bg-[#F3F4F5] rounded-tr-md rounded-tl-md text-gray-50 py-10 px-0  md:px-16 '>
            <div className='mx-6 md:mx-6 xl:mx-0'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className='text-[#1F1E1E] w-full md:w-1/2'>
                        <h1 className='font-GilroyBold text-lg md:text-xl'>Symbol Of Vigilance & Reward</h1>
                        <p className='font-GilroyRegular text-xs w-full md:w-11/12 pt-4 md:pt-2'>FROSKA embodies our values—watchfulness, loyalty, and promise. Raised in an environment of care, FROSKA signifies
                            our commitment to overseeing and rewarding contributions within our community.
                        </p>
                    </div>
                    <div className=' w-2/2 order-first sm:order-last'>
                        <Image className="w-[150px] h-[138px] mb-10 sm:mb-0" src={reward} alt="rewards" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Symbol