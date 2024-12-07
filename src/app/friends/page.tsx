'use client'

import Image from "next/image";
import toast from "react-hot-toast";
import {FiClipboard} from "react-icons/fi";
import {Page} from "@/components/Page";

const Friends = () => {
    const base = "https://chart.ton/referral?7777777";

    const copylink = (e: any) => {
        navigator.clipboard.writeText(base);
        toast.success('Copied!')
    }

    return (
        <Page back={true}>
            <div className={'px-3 py-5 box flex flex-col gap-y-4 text-color'}>
                <div className={'flex justify-center items-center flex-col gap-y-1'}>
                    <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                        <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                    </div>

                    <h2 className={'text-center text-[1.2rem] font-bold text-color'}>Friends</h2>
                </div>

                <div className={'cursor-pointer relative w-full p-3 section-bg-color subtitle-text-color rounded-xl text-[14px] truncate group overflow-hidden transition'} onClick={copylink}>
                    https://acing.music.ton/referral?7777777
                    <FiClipboard size={20} className={'subtitle-text-color absolute opacity-100 right-2 top-[50%] translate-y-[-50%] group-active:opacity-0 transition'} />
                </div>
            </div>
        </Page>
    );
};

export default Friends;