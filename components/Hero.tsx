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
            <div className='flex flex-col sm:flex-row justify-between items-center '>
                <div className='w-2/4'>
                    <div className='flex flex-col font-GilroyBold text-5xl gap-2'>
                        <span className=''>Froska sees,</span>
                        <span className=''>froska rewards!</span>
                    </div>
                    <p className='text-xs dark:text-[#FFFFFF] text-[#717580] font-GilroyRegular py-6'>Our beloved Watchful companion, The endearing feline companion of Metis CEO Elena
                        entered our world as a serendipitous encounter. Elena, captivated by this furry marvel,
                        embraced FROSKA into the Metis family.
                    </p>
                    <button className='bg-[#242529] mt-1 dark:bg-[#FFFFFF] px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] flex items-center'>
                        <span className='text-xs font-semibold'>
                            BUY FROSKA
                        </span>
                        <TiArrowRight className='flex items-center' size={20} />
                    </button>
                </div>
                <div className='w-2/2'>
                    <Image src={darkMode?heroWhite:heroDark} alt='froska' className="w-[280px] h-[310px] " />
                </div>
            </div>
        </div>
    )
}

export default Hero