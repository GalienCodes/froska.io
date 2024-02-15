'use client';
import heroWhite from '../assets/hero-white.png'
import heroDark from '../assets/hero-dark.png'
import Image from 'next/image'
import Link from 'next/link'
import { TiArrowRight } from 'react-icons/ti'
import { useGlobalState } from '@/store'

const Hero = () => {
    const [darkMode] = useGlobalState('darkMode');

    return (
        <div className='pt-32 pb-24 max-w-5xl mx-auto text-[#242529] dark:text-[#FFFFFF] '>
            <div className='mx-4 sm:mx-6 xl:mx-0'>
                <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left  '>
                    <div className='flex flex-col justify-center sm:justify-start  w-full md:w-2/4 text-center md:text-left'>
                        <div className='flex flex-col font-GilroyBold text-4xl md:text-5xl gap-2'>
                            <span className='md:text-left text-center'>Froska sees,</span>
                            <span className='md:text-left text-center'>Froska rewards!</span>
                        </div>
                        <p className='text-center md:text-left text-[12.5px] dark:text-[#FFFFFF] text-[#717580] font-GilroyRegular py-6'>Our beloved watchful companion, the endearing feline companion of Metis CEO Elena
                            entered our world as a serendipitous encounter. Elena, captivated by this furry marvel,
                            embraced FROSKA into the Metis family.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                            <Link href="https://hermes.maiadao.io/#/add/METIS/0x920912668fE3B30F2f286E913a5F3c974e002aEB/false" target='_blank'>
                                <button className='flex bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                                    <span className='text-[12.5px] font-semibold'>
                                        BUY FROSKA 
                                    </span>
                                    <TiArrowRight className='flex items-center' size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-2/2 order-first md:order-last mb-12 md:mb-0'>
                        <Image src={darkMode ? heroWhite : heroDark} alt='froska' className=" w-[280px] h-[310px] text-center" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero