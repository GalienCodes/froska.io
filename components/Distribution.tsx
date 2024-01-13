import Image from 'next/image'
import footstep from '../assets/footstepw.svg'
import { distribution, tokenomicItems } from '@/mission'


const Distribution = () => {
    return (
        <div className='max-w-5xl mx-auto text-[#FFFFFF] py-10 px-16 bg-[#1F1E1E] mt-10 rounded-md'>
            <div className='mx-4'>
                <h2 className='font-GilroyBold text-xl  text-[#FFFFFF]'>
                    Token distribution breakdown
                </h2>
                <p className='font-GilroyRegular text-xs pt-2.5 pb-5'>Total Token Supply: <span className='font-GilroyBold '>100 Million Tokens</span></p>
                <div className='text-[#F3F4F5] mx-4 sm:mx-6 lg:mx-0 grid justify-between  items-center'>
                    <div className='text-center sm:text-left w-full sm:w-3/5'>
                        {distribution.map((item,index) => {
                            const {name, mainDescription, description, points, subPoints } = item
                            return (
                                <div>
                                    <div className='flex items-start gap-5' key={index}>
                                        <Image src={footstep} alt='footstep' width={14} height={14} />
                                        <div>
                                            <h2 className={`font-GilroyBold text-xs ${index === distribution.length - 1 ? '' : 'pb-5'}`}>{name}</h2>
                                            <p className='font-GilroyRegular text-xs'>{mainDescription}</p>
                                            <p className='font-GilroyRegular text-xs mt-4'>{description && description}</p>
                                            <ul className='font-GilroyRegular text-xs ml-6 mt-4'>
                                                {points?.map((item, index) => (
                                                    <li className="list-disc" key={index}>{item}</li>
                                                ))}
                                                <ul className={`font-GilroyRegular text-xs ml-6 ${ subPoints.length==0 ? '' : 'mb-8'}`}>
                                                    {subPoints?.map((item, index) => (
                                                        <li className="list-disc" key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distribution