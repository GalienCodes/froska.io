'use client';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/froska1.svg'
import Logowhite from '../assets/Logowhite.svg'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle';
import { TiArrowRight } from "react-icons/ti";
import { useGlobalState } from '@/store';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdClose, MdOutlineLogout } from 'react-icons/md';

const navItems = {
  "/Tokenomics": {
    name: 'Tokenomics'
  },
  "/How to buy": {
    name: 'How to buy'
  },
  "/Mission": {
    name: 'Mission'
  },
  "/Airdrop": {
    name: 'Airdrop'
  },
}

const NavBar = () => {
  const [darkMode] = useGlobalState('darkMode');
  const pathname = usePathname()
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };
  return (
    <div className='fixed top-0 left-0 right-0 border-b-[1.5px] xl:px-0 px-6  border-[#F3F4F5] dark:border-[#42454C] bg-[#FFFFFF] dark:bg-[#2B2F38] shadow-b-sm '>
      <div className='mx-auto max-w-5xl py-5 bg- w-full z-[1]'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src={darkMode ? Logowhite : logo} alt='froska' height={100} width={90} />
          </Link>
          <div>
            <ul className='flex justify-between items-center gap-4 lg:gap-10 '>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link key={path} href={`#${path.substring(1)}`}
                    className=' md:block hidden font-normal text-[#1F1E1E] text-[12.5px] dark:text-[#FFFFFF]'
                  >
                    {name}
                  </Link>
                )
              })}
              <div className='flex items-center gap-6'>
                <Link href="https://hermes.maiadao.io/#/add/METIS/0x920912668fE3B30F2f286E913a5F3c974e002aEB/false" target='_blank'>
                  <button className=' md:flex hidden bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                    <span className='text-[12.5px] font-semibold'>
                      BUY FROSKA
                    </span>
                    <TiArrowRight className='flex items-center' size={20} />
                  </button>
                </Link>
                <ThemeToggle />
                <div className='md:hidden block'>
                  <IoMenu className='text-3xl dark:text-[#FFFFFF] text-[#1F1E1E]' onClick={() => handleOpened()} />
                </div>
              </div>
            </ul>
          </div>

          {/* Phone */}
          <div className={opened ? 'block fixed top-0 right-0 bottom-0  shadow-xl  w-5/6 max-w-sm overflow-hidden bg-[#F3F4F5] dark:bg-[#1F1E1E] overflow-y-auto transition-transform duration-300' : 'hidden'}>
            {opened ? (
              <div className='flex items-center py-[17px] px-5 justify-between border-b-[1.5px] border-[#eaebec] dark:border-[#42454C]'>
                <div className='md:hidden  block'>
                  <MdClose className='text-4xl dark:text-[#FFFFFF] text-[#1F1E1E]' onClick={() => handleOpened()} />
                </div>
                <Link href="https://hermes.maiadao.io/#/add/METIS/0x920912668fE3B30F2f286E913a5F3c974e002aEB/false" target='_blank'>
                  <button className='flex bg-[#242529] dark:bg-[rgb(255,255,255)] px-3 py-2   rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                    <span className='text-[12.5px] font-semibold'>
                      BUY FROSKA
                    </span>
                    <TiArrowRight className='flex items-center' size={20} />
                  </button>
                </Link>
              </div>
            ) : ''}
            <div className='gap-3 flex flex-col py-6 px-6 '>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link key={path} href={`#${path.substring(1)}`}
                    onClick={() => handleOpened()}
                    className='font-normal text-[#1F1E1E] text-[12px] dark:text-[#FFFFFF]'
                  >
                    {name}
                  </Link>
                )

              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar