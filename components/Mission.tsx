import { froskaMission } from '@/mission';
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';

interface Mission {
    id: number,
    title: string,
    description: string
}

const Mission = () => {
    return (
        <div className='max-w-6xl mx-auto text-gray-50 pt-8 pb-10 sm:pb-20 '>
            <h2 className='font-bold text-3xl lg:text-4xl pb-2 top-0  text-center capitalize'>
                FROSKA's Mission
            </h2>
            <h4 className='text-base text-center sm:text-lg font-bold sm:font-bold  '>Safeguarding and Incentivizing</h4>
            <div className='mx-4 sm:mx-6 lg:mx-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6  justify-between  items-start'>
                {froskaMission.map((item: Mission) => {
                    const { id, title, description } = item;
                    return (
                        <div className='rounded p-4' key={id}>
                            <div className=' flex items-center'>
                                <h1 className='bg-[#5590ff] text-gray-50 w-10 h-10 text-center p-2 rounded-full mb-2  text-xl font-bold shadow-lg'>
                                    {id}
                                </h1>
                                <span className='ml-4'>
                                    {title}
                                </span>
                            </div>

                            <p className='text-sm sm:text-base'>
                                {description}
                            </p>
                        </div>)
                })}
            </div>
            <p id='Distribution'></p>
        </div>
    )
}

export default Mission