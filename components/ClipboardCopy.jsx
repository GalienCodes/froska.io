import React, { useState } from 'react'
import { truncate } from '@/store';
import { LuCopyCheck, LuCopy } from "react-icons/lu";
import { addFroskaMetamask } from '@/web3Services';
import { MdAddCircleOutline } from 'react-icons/md';

const ClipboardCopy = ({ copyText }) => {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <div className='flex bg-[#242529] dark:bg-[#FFFFFF] gap-4 px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>
                <p className='text-[12.5px] font-semibold' value={copyText}>
                    {truncate(copyText, 6, 8, 17)}
                </p>
                <div className='flex gap-2'>
                    <span onClick={handleCopyClick}>
                        {isCopied ?
                            <LuCopyCheck className='flex items-center text-green-600' size={20} />
                            : <LuCopy className='flex items-center' size={20} />
                        }
                    </span>
                    <span>
                        <MdAddCircleOutline onClick={addFroskaMetamask} className='flex items-center' size={20} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ClipboardCopy