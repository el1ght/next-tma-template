import Link from "next/link";
import PlaylistCard from "@/components/HomeLayout/PlaylistCard";
import React from "react";

interface PlaylistCarouselProps {
    title: string;
    isAlbum: boolean;
    isAuthor: boolean;
    isSimilar: boolean;
    authorName: string;
}

const PlaylistsCarousel: React.FC<PlaylistCarouselProps> = ({
    title,
    isAlbum,
    isAuthor,
    isSimilar,
    authorName
}) => {
    return (
        <div className={'flex flex-col gap-y-3'}>
            {isAuthor ? (
                <div className={'flex items-center gap-x-2 ml-3'}>
                    <Link href={'/artists/42352543'} className={'w-10 h-10 bg-neutral-400 rounded-full'}></Link>
                    <Link href={'/artists/42352543'} className={'text-[20px] font-bold text-color uppercase'}>{authorName}</Link>
                </div>
            ) : (
                <div className={'text-[18px] font-bold text-color ml-3'}>
                    {title}
                </div>
            )}
            {isSimilar && (
                <div className={'flex items-center gap-x-2 ml-3'}>
                    <div className={'w-10 h-10 bg-neutral-400 rounded-xl'}></div>
                    <div className={'flex flex-col gap-y-1'}>
                        <p className={'uppercase text-[16px] font-normal subtitle-text-color leading-4'}>Similar to</p>
                        <h4 className={'text-[20px] font-bold leading-5 text-color'}>{authorName}</h4>
                    </div>
                </div>
            )}
            <div className={'px-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                <PlaylistCard
                    link={'/playlist/414154513'}
                    image_url={'/images/favBg-4.jpg'}
                    title={'Winter Mix'}
                    authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                    isAlbum={isAlbum}
                />
                <PlaylistCard
                    link={'/playlist/414154513'}
                    image_url={'/images/favBg-4.jpg'}
                    title={'World Top'}
                    authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                    isAlbum={isAlbum}
                />
                <PlaylistCard
                    link={'/playlist/414154513'}
                    image_url={'/images/favBg-4.jpg'}
                    title={'Summer Mix'}
                    authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                    isAlbum={isAlbum}
                />
            </div>
        </div>
    );
};

export default PlaylistsCarousel;