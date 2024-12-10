'use client'

import Image from "next/image";
import toast from "react-hot-toast";
import {FiClipboard} from "react-icons/fi";
import {Page} from "@/components/Page";
import {openTelegramLink, shareURL} from "@telegram-apps/sdk-react";
import {Button} from "@telegram-apps/telegram-ui";
import {FaHeart} from "react-icons/fa";
import {IoPeople} from "react-icons/io5";
import Link from "next/link";

const Friends = () => {
    const base = "https://chart.ton/referral?7777777";

    const copylink = (e: any) => {
        navigator.clipboard.writeText(base);
        toast.success('Copied!')
    }

    const botUrl = 'https://t.me/testingofyourassbot'
    // boturl & appname through env
    const refCode = '123'
    const refLink = botUrl+`/app?startapp=${refCode}`
    const shareText = `https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=Join my app!`

    const handleClick = () => {
        openTelegramLink(shareText)
    }

    return (
        <Page back={true}>
            <div className={'px-3 py-5 box flex flex-col text-color'}>
                <div className={'flex justify-center items-center flex-col gap-y-1 mb-4'}>
                    <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                        <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                    </div>

                    <h2 className={'text-center text-[1.2rem] font-bold text-color'}>Friends</h2>
                </div>

                <div className={'cursor-pointer relative w-full p-3 section-bg-color subtitle-text-color rounded-xl text-[14px] truncate group overflow-hidden transition mb-1'} onClick={copylink}>
                    https://acing.music.ton/referral?7777777
                    <FiClipboard size={20} className={'subtitle-text-color absolute opacity-100 right-2 top-[50%] translate-y-[-50%] group-active:opacity-0 transition'} />
                </div>
                <Button
                    onClick={handleClick}
                    before={<IoPeople />}
                    mode="filled"
                    size="m"
                >
                    Invite Friends
                </Button>
            </div>
        </Page>
    );
};

export default Friends;