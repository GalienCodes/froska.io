import Image from 'next/image'
import footstep from '../assets/footstepw.svg'
import { distribution, tokenomicItems } from '@/mission'


const Distribution = () => {
    return (
        <div className='max-w-5xl mx-6 lg:mx-auto text-[#FFFFFF] py-10 px-0  md:px-16 bg-[#1F1E1E] mt-20 md:mt-10 rounded-md'>
            <div className='mx-6 md:mx-4 xl:mx-0'>
                <h2 className='font-GilroyBold text-xl  text-[#FFFFFF]'>
                    Token distribution breakdown
                </h2>
                <p className='font-GilroyRegular text-xs pt-2.5 pb-5'>Total Token Supply: <span className='font-GilroyBold '>100 Million Tokens</span></p>
                <div className='text-[#F3F4F5]  pt-7 md:pt-2 grid justify-between  items-center'>
                    <div className='text-left w-full sm:w-3/5'>
                        {distribution.map((item,index) => {
                            const {name, mainDescription, description, points, subPoints } = item
                            return (
                                <div>
                                    <div className='flex items-start gap-5' key={index}>
                                        <Image src={footstep} alt='footstep' width={14} height={14} />
                                        <div>
                                            <h2 className={`font-GilroyBold text-xs ${index === distribution.length - 1 ? '' : 'pb-5'}`}>{name}</h2>
                                            <p className='font-GilroyRegular text-xs '>{mainDescription}</p>
                                            <p className='font-GilroyRegular text-xs mt-4'>{description && description}</p>
                                            <ul className='font-GilroyRegular text-xs ml-4 md:ml-6 mt-4'>
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