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
    <div className='fixed top-0 left-0 right-0 border-b-[1.5px] border-[#F3F4F5] dark:border-[#42454C] bg-[#FFFFFF] dark:bg-[#2B2F38] shadow-b-sm '>

      <div className='mx-auto max-w-5xl py-5 bg- w-full z-50'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src={ darkMode? Logowhite : logo} alt='froska' height={100} width={90} />
          </Link>
          <div>
            <ul className='flex justify-between items-center gap-10'>
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link key={path} href={`#${path.substring(1)}`}
                    className='font-normal text-[#1F1E1E] text-[12px] dark:text-[#FFFFFF]'
                  >
                    {name}
                  </Link>
                )

              })}
              <div className='flex items-center gap-6'>
                <button className='bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] flex items-center'>
                  <span className='text-xs font-semibold'>
                    BUY FROSKA
                  </span>
                  <TiArrowRight className='flex items-center' size={20} />
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