import React from 'react'
import froska from '../assets/froska.svg'
import Image from 'next/image'

const Symbol = () => {
    return (
        <div className='max-w-6xl mx-auto text-gray-50 pt-20 pb-10 sm:pb-20'>
            <div className='mx-4 sm:mx-6 lg:mx-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6  justify-between  items-start'>
                <div className='flex items-center justify-center sm:justify-start'>
                    <Image height={400} width={300} src={froska} alt="fanacial-wallet" />
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xl pb-2 top-0 sm:text-left text-center capitalize'>
                        Symbol of Vigilance and Reward
                    </h2>
                    <p className='text-sm sm:text-base'>
                        <span className='font-semibold'>FROSKA </span> embodies our values—watchfulness, loyalty, and promise. Raised in an environment of care, FROSKA signifies our commitment to overseeing and rewarding contributions within our community.
                    </p>

                    <h2 className='font-bold text-xl pt-4 pb-2 top-0 sm:text-left text-center capitalize'>
                        Legacy and Vision
                    </h2>
                    <p className='text-sm sm:text-base'>
                        FROSKA’s legacy shapes our journey, reminding us of our collective goal: to foster a secure and rewarding ecosystem for all within Metis.
                    </p>
                    <p className='text-sm sm:text-base py-2'>FROSKA is Metis’ CEO Elena’s cat. Grown in a setting of love and generosity, FROSKA promises to watch quietly and reward</p>
                    <p id='Mission' className='text-sm sm:text-base'>FROSKA sees! FROSKA reward! </p>
                </div>
            </div>
        </div>
    )
}

export default Symbol