'use client';
import React, { useState, useEffect } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import copy from 'copy-to-clipboard';

const ClipboardCopy = () => {
    const [copied, setCopiedId] = useState<string>();
    const [copiedText, setCopiedText] = useState<string>();
    const [copiedImage, setCopiedImage] = useState<string>();

    useEffect(() => {
        (async function run() {
            if (copied?.includes('text')) {

                // Reading text with readText

                const text = await navigator.clipboard.readText();
                setCopiedText(text);

            } else if (copied?.includes('image')) {

                // Reading image data with read

                const clipboard = await navigator.clipboard.read();

                const images = await Promise.all(
                    clipboard
                        .filter(clipboardItem => clipboardItem.types.includes('image/png'))
                        .map(clipboardItem => clipboardItem.getType('image/png'))
                );

                // UI supports one image, so only set one

                setCopiedImage(URL.createObjectURL(images[0]));
            }
        })();
        setTimeout(() => {
            setCopiedId(undefined);
            setCopiedText(undefined);
        }, 3000)
    }, [copied]);
    return (
        <div className='fixed top-0 left-0 right-0 w-'>
            <div className='flex w-auto bg-[#242529] dark:bg-[#FFFFFF] px-3 py-2 rounded-md text-[#FFFFFF] dark:text-[#1F1E1E] items-center'>

                <span className='text-[12.5px] font-semibold'>
                    0x920912668fE3B30F2f286E913a5F3c974e002aEB

                </span>
                <button onClick={async () => {
                    await navigator.clipboard.writeText('navigator.clipboard.readText()')
                    setCopiedId('read-text')
                }}>
                    {copied === ('writer-text') ?
                        <IoCopyOutline className='flex items-center' size={20} /> :
                        <LuCopyCheck className='flex items-center' size={20} />
                    }
                </button>
            </div>
        </div >
    )
}

export default ClipboardCopy