'use client'

import LikedContent from "@/components/LikedContent/LikedContent";
import Image from "next/image";
import {FaPlay, FaRepeat, FaShuffle} from "react-icons/fa6";
import {Page} from "@/components/Page";

const mockSongs = [
    {
        id: '1',
        user_id: 'el1ght',
        author: 'Ponomaryov',
        title: 'Ukraine',
        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
        url: 'https://charton-tracks.s3.eu-central-003.backblazeb2.com/Oleksandr+Ponomaryov.mp3',
    },
    {
        id: '2',
        user_id: 'el1ght',
        author: 'Lana Del Rey',
        title: 'Off to the Races',
        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
        url: 'https://f003.backblazeb2.com/file/charton-tracks/Lana-Del-Rey-%E2%80%93-Off-To-The-Races.m4a'
    },
    {
        id: '3',
        user_id: 'el1ght',
        author: 'Madza',
        title: 'Late Night Drive',
        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    },
    {
        id: '4',
        user_id: 'el1ght',
        author: 'Madza',
        title: 'Chords of Life',
        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
        url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    },
    {
        id: '5',
        user_id: 'el1ght',
        author: 'Madza',
        title: 'Persistence',
        image_path: 'https://f003.backblazeb2.com/file/charton-thumbnails/512x512bb.webp',
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    }
]

const Liked = () => {

    return (
        <Page back={true}>
            <div className={'px-3 py-5 box flex flex-col gap-y-8 pb-20 text-color'}>
                <div className={'flex justify-center items-center flex-col gap-y-2'}>
                    <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                        <Image className={'w-[200px] h-[200px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                    </div>

                    <h2 className={'text-center text-[1.2rem] font-bold'}>Liked Songs</h2>

                    <div className={'flex flex-col items-center mb-4'}>
                        <div className={'flex gap-x-2 items-center'}>
                            <div className={'w-8 h-8 rounded-full bg-neutral-900'}></div>
                            <p className={'text-[14px]'}>Mixed by <span className={'font-semibold'}>Чекан</span></p>
                        </div>
                        <p className={'text-[13px]'}>288 tracks</p>

                    </div>

                    <div className={'flex items-center gap-x-5'}>
                        <button className={'w-[50px] h-[50px] section-bg-color rounded-full flex items-center justify-center'}>
                            <FaRepeat size={20} />
                        </button>
                        <button className={'p-10 button-color rounded-full outline outline-2 outline-offset-4 outline-color'}>
                            <FaPlay size={30} className={''} />
                        </button>
                        <button className={'w-[50px] h-[50px] section-bg-color rounded-full flex items-center justify-center'}>
                            <FaShuffle size={20} />
                        </button>
                    </div>
                </div>

                <LikedContent songs={mockSongs} />
            </div>
        </Page>
    );
};

export default Liked;