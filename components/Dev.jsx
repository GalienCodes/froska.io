import React from 'react'
import dev from '../assets/dev1.png'
import Image from 'next/image'


const Dev = () => {
    return (
        <div className='max-w-6xl mx-auto text-gray-50 py-10'>
            <div className="mx-4 sm:mx-6 lg:mx-0">
                <div className='flex flex-col lg:flex-row  justify-between gap-4'>
                    <div className='text-center lg:text-left w-full lg:w-4/5 py-4 sm:py-12'>
                        <h2 className='font-bold text-xl pb-2 top-0 lg:text-left text-center capitalize'>
                            Marketing and Development: 15% (15 Million Tokens)
                        </h2>
                        <p className='text-sm sm:text-base'>
                            <span className='font-semibold'>To secure FROSKA's longevity and advancement, 15 million tokens will be earmarked.  </span>
                            This reserve will support crucial aspects such as marketing initiatives, future development endeavors, strategic partnerships, and grants aimed at fostering widespread adoption.
                        </p>
                        <h2 className='font-bold text-xl pt-4 pb-2 top-0 sm:text-left text-center capitalize'>
                            Team allocation: 15% (15 Million Tokens)
                        </h2>
                        <p className='text-sm sm:text-base'>
                            The vibrant Froska team members from our very own OG Metis community, is dedicated for maintaining a safe an welcoming ecosystem and is allocated 15% which is locked for 1 year, with 1/12 release monthly
                        </p>
                    </div>
                    <Image className='hidden lg:block order-first' height={200} width={600} src={dev} alt="fanacial-wallet" />
                </div>
            </div>
        </div>
    )
}

export default Dev