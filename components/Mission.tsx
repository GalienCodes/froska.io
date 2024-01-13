import { froskaMission } from '@/mission';

interface Mission {
    id: number,
    title: string,
    description: string
}

const Mission = () => {
    return (
        <div className='max-w-5xl mx-auto  pt-20 pb-10 sm:pb-20 '>
            <div className='mx-6 md:mx-6 xl:mx-0'>
                <h2 className='font-GilroyBold text-xl dark:text-[#FFFFFF] text-[#1F1E1E]'>
                    Our Mission
                </h2>

                <div className=' pt-6 md:pt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-12  justify-between  items-start'>
                    {froskaMission.map((item: Mission) => {
                        const { id, title, description } = item;
                        return (
                            <div className='font-GilroyRegular' key={id}>
                                <h1 className='font-GilroyHeavyItalic dark:text-[#42454C] text-[#E8E8E8] text-6xl'>
                                    {id}
                                </h1>

                                <p className='mt-[-26px] dark:text-[#FFFFFF] text-[#242529] text-xs'>
                                    {description}
                                </p>
                            </div>)
                    })}
                </div>
            </div>

            <p id='Distribution'></p>
        </div>
    )
}

export default Mission