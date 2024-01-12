'use client';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/froska1.svg'
import Logowhite from '../assets/Logowhite.svg'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle';
import { TiArrowRight } from "react-icons/ti";
import { useGlobalState } from '@/store';

const navItems: { [key: string]: { name: string } } = {
  "/Tokenomics": {
    name: 'Tokenomics'
  },
  "/How to buy": {
    name: 'How to buy'
  },
  "/Mission": {
    name: 'Mission'
  },
  "/About": {
    name: 'About'
  },
}

const NavBar = () => {
  const [darkMode] = useGlobalState('darkMode');
  const pathname = usePathname()
  console.log(pathname);


  return (
    <div className='fixed top-0 left-0 right-0 border-b-2 border-[#E9E9E9]'>

      <div className='bg-[#F3F4F5] dark:bg-[#2B2F38] shadow-b-sm mx-auto max-w-6xl py-8 bg- w-full z-50'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src={ darkMode? Logowhite : logo} alt='froska' height={150} width={140} />
          </Link>
          <div>
            <ul className='flex justify-between items-center gap-14'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link key={path} href={`#${path.substring(1)}`}
                    className='font-medium text-[#1F1E1E] text-[#12px] dark:text-[#FFFFFF]'
                  >
                    {name}
                  </Link>
                )

              })}
              <div className='flex items-center gap-10'>
                <button className='bg-[#242529] px-3 py-3 rounded-md text-[#FFFFFF] flex items-center'>
                  <span className='text-[#14] font-semibold'>
                    BUY FROSKA
                  </span>
                  <TiArrowRight className='' size={24} />
                </button>
                <ThemeToggle />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar