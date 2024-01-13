import Image from 'next/image'
import Tokenomic from '../assets/tokenomics.png'
import footstep from '../assets/footstep.svg'
import { tokenomicItems } from '@/mission'


const Tokenomics = () => {
    return (
        <div className='max-w-5xl mx-auto text-gray-50 py-10 px-16 bg-[#F3F4F5] rounded-md'>
            <div className='mx-4'>
                <h2 className='font-GilroyBold text-xl  text-[#1F1E1E]'>
                    Tokenomics
                </h2>
                <div className='text-[#242529] mx-4 sm:mx-6 lg:mx-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6  justify-between  items-center'>
                    <div className='text-center sm:text-left w-full sm:w-4/5'>
                        {tokenomicItems.map((item)=>{
                            const {id,name} = item
                            return(
                                <div className='flex items-center gap-5 pb-4' key={id}>
                                    <Image src={footstep} alt='footstep' width={14} height={14}/>
                                    <p className='GilroyMedium text-xs'>{name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <Image className=' order-first sm:order-last self-center ml-10' height={400} width={300} src={Tokenomic} alt="Tokenomics" />
                </div>
            </div>
        </div>
    )
}

export default Tokenomics