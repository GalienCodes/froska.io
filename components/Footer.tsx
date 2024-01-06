import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='max-w-6xl mx-auto pt-4 mb-6 text-gray-50 border-t-2'>
            <div className="mx-4 sm:mx-6 lg:mx-0  flex flex-col md:flex-row justify-center md:justify-between">
                <h2 className='text-center sm:text-center'> &copy; {date} FROSKA</h2>
                <div className='flex gap-4 items-center justify-center'>
                    <a href="https://x.com/froska_io?s=21&t=iuzhPCKkSuV_btx2HUZcdg" target='_blank'>
                        <h4 className='text-center cursor-pointer flex items-center gap-2 '>Our Socials<BsTwitterX className="Footercon" /> </h4>
                    </a>
                    <a href="https://t.me/froska_official" target='_blank'>
                        <h4 className='text-center cursor-pointer '><FaTelegram className="Footercon" /> </h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer