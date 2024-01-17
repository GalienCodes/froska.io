import React from 'react'
import vision from '../assets/vision.png'
import Image from 'next/image'

const LegacyVision = () => {
    return (
        <div className='max-w-5xl mx-6 lg:mx-auto bg-[#1F1E1E] rounded-br-md rounded-bl-md text-[#F3F4F5] py-10 px-0  md:px-16 '>
            <div className='mx-6 md:mx-6 xl:mx-0'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className=' w-2/2'>
                        <Image className="w-[150px] h-[150px] " src={vision} alt="vision" />
                    </div>
                    <div className='tex-[#F3F4F5] w-full sm:w-1/2 mt-10 sm:mt-0 '>
                        <h1 className='font-GilroyBold text-lg md:text-xl'>Legacy and vision</h1>
                        <p className='font-GilroyRegular text-[12.5px] w-full pt-7 md:pt-2'>
                            FROSKA’s legacy shapes our journey, reminding us of our collective goal: to foster a secure and rewarding ecosystem for all within Metis.
                        </p>
                        <p className='font-GilroyRegular text-[12.5px] w-full pt-2' id='Mission'>
                            FROSKA is Metis’ CEO Elena’s cat. Grown in a setting of love and generosity, FROSKA promises to watch quietly and reward
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegacyVision