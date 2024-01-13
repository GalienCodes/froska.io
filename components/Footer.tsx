'use client';

import { useGlobalState } from '@/store';
import Image from 'next/image'
import logo from '../assets/froska1.svg'
import Logowhite from '../assets/Logowhite.svg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    const date = new Date().getFullYear();
    const [darkMode] = useGlobalState('darkMode');

    return (
        <div className='bg-[#F3F4F5] dark:bg-[#1F1E1E] mt-12 py-10 '>
            <div className='mx-6 md:mx-6 xl:mx-0'>
                <div className='max-w-5xl mx-auto py-4 mb-10 text-[#1F1E1E]  dark:text-[#FFFFFF] '>
                    <div className='font-GilroyRegular text-xs grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-12  justify-between '>
                        <div className='py-2'>
                            <Image src={darkMode ? Logowhite : logo} alt='froska' height={100} width={90} />
                            <h2 className='pt-4'>
                                <span className='font-GilroyBold '>froska</span>  sees!
                                <span className='font-GilroyBold '>froska</span> reward!
                            </h2>
                        </div>
                        <ul className="py-2">
                            <li className="mb-1.5">About us</li>
                            <li className="mb-1.5">Feedback</li>
                            <li className="mb-1.5">Community</li>
                        </ul>
                        <ul className="py-2">
                            <li className="mb-1.5">Help & Support </li>
                            <li className="mb-1.5">Safety & Security </li>
                            <li className="mb-1.5">Froska Foundation</li>
                        </ul>
                        <ul className="py-2">
                            <li className="mb-1.5">Help & Support </li>
                            <li className="mb-1.5">Safety & Security </li>
                            <li className="mb-1.5">Froska Foundation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='dark:bg-[#FFFFFF] bg-[#1F1E1E] dark:text-[#1F1E1E]  px-2 md:px-0 text-[#FFFFFF]   py-4 '>
                <div className='max-w-5xl mx-auto font-GilroySemibold text-xs'>
                    <div className="mx-4 sm:mx-6 lg:mx-0  flex items-center justify-between">
                        <h2 className='text-left'> &copy; {date - 1} - {date} Froska</h2>
                        <div className='flex gap-4 items-center justify-center '>
                            <a href="https://x.com/metisfroska?s=21&t=R1Npp91OsViMHyM3gdEGVQ" target='_blank'>
                                <FaSquareXTwitter className="text-center cursor-pointer" size={20} />
                            </a>
                            <a href="https://t.me/metisfroska" target='_blank'>
                                <FaTelegram className="text-center cursor-pointer" size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Footer