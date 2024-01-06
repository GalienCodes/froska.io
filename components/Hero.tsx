import React from 'react'
import fanacial from '../assets/fanacial.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='pt-20 ms:pt-20   max-w-6xl mx-auto text-gray-50 '>
            <div className="mx-4 sm:mx-6 lg:mx-0">
                <div className='flex flex-col sm:flex-row  items-center justify-between gap-4'>
                    <div className='text-center sm:text-left w-full sm:w-4/5'>
                        <h1 className='font-bold text-4xl lg:text-5xl pb-4'>FROSKA token</h1>
                        <h4 className='text-base sm:text-lg font-bold sm:font-bold  '>Our Beloved Watchful Companion</h4>
                        <p className='text-sm sm:text-base'>
                            The endearing feline companion of Metis CEO Elena, entered our world as a serendipitous encounter. Elena, captivated by this furry marvel, embraced FROSKA into the Metis family.
                        </p>
                        <div className='flex gap-4 my-4 justify-center sm:justify-start'>
                            <button className='px-4 py-2 rounded cursor-pointer bg-gray-900 text-white'> <Link target='_blank' href={'https://explorer.metis.io/address/0x920912668fE3B30F2f286E913a5F3c974e002aEB'}>View contract</Link></button>
                            <button className='bg-gray-50 text-gray-900 px-4 py-2 rounded cursor-pointer'>Liquidity</button>
                        </div>
                    </div>
                    <Image className=' order-first sm:order-last' height={500} width={400} src={fanacial} alt="fanacial-wallet" />

                </div>
            </div>
        </div>
    )
}

export default Hero