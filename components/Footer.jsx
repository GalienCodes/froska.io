'use client';

import { useGlobalState } from '@/store';
import Image from 'next/image'
import logo from '../assets/froska1.svg'
import Logowhite from '../assets/Logowhite.svg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    const date = new Date().getFullYear();
    const [darkMode] = useGlobalState('darkMode');

    return (
        <div className='bg-[#F3F4F5] dark:bg-[#1F1E1E] mt-12 py-10 '>
            <div className='mx-6 md:mx-6 xl:mx-0'>
                <div className='max-w-5xl mx-auto py-4 mb-10 text-[#1F1E1E]  dark:text-[#FFFFFF] '>
                    <div className='font-GilroyRegular text-[12.5px] grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-12  justify-between '>
                        <div className='py-2'>
                            <Image src={darkMode ? Logowhite : logo} alt='froska' height={100} width={90} />
                            <h2 className='pt-4'>
                                <span className='font-GilroyBold '>froska</span>  sees!
                                <span className='font-GilroyBold ml-1'>froska</span> rewards!
                            </h2>
                        </div>
                        <ul className="py-2 flex flex-col">
                            <Link href={'/'} className="mb-1.5">About us</Link>
                            <Link href={'/'} className="mb-1.5">Feedback</Link>
                            <Link href={'https://t.me/metisfroska'} target='_blank' className="mb-1.5">Community</Link>
                        </ul>
                        <ul className="flex flex-col py-2">
                            <Link href={'#Mission'} className="mb-1.5">Tokenomics </Link>
                            <Link href={'#Mission'} className="mb-1.5">Mission</Link>
                            <Link href="https://hermes.maiadao.io/#/add/METIS/0x920912668fE3B30F2f286E913a5F3c974e002aEB/false" target='_blank' className="mb-1.5">Buy Froska</Link>
                        </ul>
                        <ul className="hidden md:flex py-2 flex-col">
                            <Link href={'https://t.me/metisfroska'} target='_blank' className="mb-1.5">Help & Support </Link>
                            <Link href={'/'} className="mb-1.5">Safety & Security </Link>
                            <Link href={'/'} className="mb-1.5">Froska Foundation</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='dark:bg-[#FFFFFF] bg-[#1F1E1E] dark:text-[#1F1E1E]  px-2 md:px-0 text-[#FFFFFF]   py-4 '>
                <div className='max-w-5xl mx-auto font-GilroySemibold text-[12.5px]'>
                    <div className="mx-4 sm:mx-6 lg:mx-0  flex items-center justify-between">
                        <h2 className='text-left'> &copy; {date - 1} - {date} Froska</h2>
                        <div className='flex gap-4 items-center justify-center '>
                            <a href="https://x.com/metisfroska?s=21&t=R1Npp91OsViMHyM3gdEGVQ" target='_blank'>
                                <FaSquareXTwitter className="text-center cursor-pointer" size={22} />
                            </a>
                            <a href="https://t.me/metisfroska" target='_blank'>
                                <FaTelegram className="text-center cursor-pointer" size={22} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Footer