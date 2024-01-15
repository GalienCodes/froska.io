import Image from 'next/image'
import Tokenomic from '../assets/tokenomics.png'
import footstep from '../assets/footstep.svg'
import { tokenomicItems } from '@/mission'


const Tokenomics = () => {
    return (
        <div id='Tokenomics' className='max-w-5xl mx-6 md:mx-auto bg-[#F3F4F5] rounded-md text-gray-50 py-10 mt-10 md:mt-0 px-0  md:px-16 '>
            <div className='mx-6 md:mx-4 xl:mx-0'>
                <h2 className='font-GilroyBold text-xl pb-7 md:pb-0 text-[#1F1E1E]'>
                    Tokenomics
                </h2>

                <div className='flex flex-col sm:flex-row justify-between items-center text-[#1F1E1E]'>
                    <div className='text-center sm:text-left w-full sm:w-3/5'>
                        {tokenomicItems.map((item, index) => {
                            const { id, name } = item
                            return (
                                <div key={index} className={`flex items-center gap-5  ${index === tokenomicItems.length - 1 ? '' : 'pb-5'}`} >
                                    <Image src={footstep} alt='footstep' width={16} height={16} />
                                    <p className='font-GilroyMedium text-xs text-left'>{name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <Image className=' order-first sm:order-last self-center ml-0 md:ml-10 mb-10 sm:mb-0 w-[220px] h-[188px] md:w-[240px] md:h-[220px]' src={Tokenomic} alt="Tokenomics" />
                </div>
            </div>
        </div>
    )
}

export default Tokenomics