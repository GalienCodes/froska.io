import React from 'react'
import vision from '../assets/vision.png'
import Image from 'next/image'

const LegacyVision = () => {
    return (
        <div className='max-w-5xl mx-auto bg-[#1F1E1E] rounded-br-md rounded-bl-md text-gray-50 py-10 px-16 '>
            <div className='mx-4 flex justify-between  items-center'>
                <div className=' w-2/2'>
                    <Image className="w-[150px] h-[150px] " src={vision} alt="vision" />
                </div>
                <div className='text-[#FFFFFF] w-1/2'>
                    <h1 className='font-GilroyBold text-xl'>Legacy and vision</h1>
                    <p className='font-GilroyRegular text-xs w-full pt-2'>
                        FROSKA’s legacy shapes our journey, reminding us of our collective goal: to foster a secure and rewarding ecosystem for all within Metis.
                    </p>
                    <p className='font-GilroyRegular text-xs w-full pt-2' id='Mission'>
                        FROSKA is Metis’ CEO Elena’s cat. Grown in a setting of love and generosity, FROSKA promises to watch quietly and reward
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LegacyVision