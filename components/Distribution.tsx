import Image from 'next/image'
import fanacial from '../assets/fanacial.png'
import React from 'react'
import Dev from './Dev'

const Distribution = () => {
    return (
        <div className='max-w-6xl mx-auto text-gray-50'>
            <h2 className='font-bold text-3xl lg:text-4xl pb-2 top-0  text-center capitalize'>
                Token Distribution Breakdown
            </h2>
            <h4 className='text-base text-center sm:text-lg font-bold sm:font-semibold  '>Total Token Supply: 100 Million Tokens</h4>
            <div className="mx-4 sm:mx-6 lg:mx-0">
                <div className='flex flex-col sm:flex-row  items-center justify-between gap-4'>
                    <div className='text-center sm:text-left w-full sm:w-4/5'>
                        <h2 className='font-bold text-xl pb-2 top-0 sm:text-left text-center capitalize'>
                            Airdrop: 30% (50 Million Tokens)
                        </h2>
                        <p className='text-sm sm:text-base'>
                            FROSKA aims to be a cornerstone of the Web3 community. Half of the total token supply, 50 million tokens, will be airdropped to the broader Metis Web3 community, fostering engagement and participation across the ecosystem.
                        </p>
                    </div>
                    <Image className=' order-first sm:order-last' height={500} width={400} src={fanacial} alt="fanacial-wallet" />
                </div>
            </div>
            <div className='mx-4 sm:mx-6 lg:mx-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6  justify-between  items-start'>
                <div className='rounded p-4'>
                    <h1 className=' text-gray-50 sm:text-left  text-center p-2 mb-2  text-xl font-bold '>
                        Metis Community Allocation: 10% (10 M Tokens)
                    </h1>

                    <div className='text-sm sm:text-base'>
                        <p>
                            Starting from within, 10 million tokens will be airdropped to Metis community contributors, native developers, and dedicated members, acknowledging their vital role in the ecosystem's growth.
                        </p>
                        <ul className='com flex py-2 text-center'>
                            <li className='p-2 rounded shadow-md border'>Active Wallets</li>
                            <li className='p-2 mx-2 rounded shadow-md border'>CEG voters</li>
                            <li className='p-2 rounded shadow-md border'>Builders</li>
                            <li className='p-2 mx-2 rounded shadow-md border'>KOLs</li>
                        </ul>
                    </div>
                </div>

                <div className='rounded p-4'>
                    <h1 className=' text-gray-50 sm:text-left  text-center p-2 mb-2  text-xl font-bold '>
                        Web3 Contributors Rewards: 30% (40 M Tokens)
                    </h1>

                    <div className='text-sm sm:text-base'>
                        <p>
                            The remaining 40 million tokens will serve as rewards for Web3 contributors, incentivizing ongoing contributions and ensuring sustained growth and prosperity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center sm:mx-6 lg:mx-0 py-6">
                <div className='text-center max-w-4xl'>
                    <div className='text-center sm:text-left w-full'>
                        <h2 className='font-bold text-xl pb-2 top-0  text-center capitalize'>
                            Liquidity Burn: 30% (30 Million Tokens)
                        </h2>
                        <p className='text-sm sm:text-base text-center'>
                            Reflecting the typical meme token mechanics, 30% of the tokens (30 million) will be burned to enhance liquidity, contributing to price stability and long-term sustainability.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Distribution