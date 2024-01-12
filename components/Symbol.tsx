import React from 'react'
import reward from '../assets/reward.png'
import Image from 'next/image'

const Symbol = () => {
    return (
        <div className='max-w-5xl mx-auto bg-[#F3F4F5] rounded-tr-md rounded-tl-md text-gray-50 py-10 px-16 '>
            <div className='mx-4 flex justify-between  items-center'>
                <div className='text-[#1F1E1E] w-1/2'>
                    <h1 className='font-GilroyBold text-xl'>Symbol Of Vigilance And Reward</h1>
                    <p className='font-GilroyRegular text-xs w-4/6 pt-2'>FROSKA embodies our values—watchfulness, loyalty, and promise. Raised in an environment of care, FROSKA signifies
                        our commitment to overseeing and rewarding contributions within our community.
                    </p>
                </div>
                <div className=' w-2/2'>
                    <Image className="w-[150px] h-[138px] " src={reward} alt="fanacial-wallet" />
                </div>
            </div>
        </div>
    )
}

export default Symbol