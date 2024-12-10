import Link from "next/link";
import Image from "next/image";
import React from "react";

interface PlaylistCardProps {
    link: string;
    image_url: string;
    title: string;
    authors: string[];
    isAlbum: boolean;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
    link,
    image_url,
    title,
    authors,
    isAlbum
}) => {
    return (
        <div className={'align-top active:scale-95 transition'}>
            <Link href={link} className={'relative block rounded-3xl h-[150px] w-[150px] p-[1px] mb-1'}>
                <Image src={image_url} alt={'playlist cover'} width={50} height={50} className={'h-full w-full rounded-3xl'} />
                {isAlbum && <div className={'absolute w-[30%] bg-[#000] top-0 right-0 bottom-0 rounded-r-3xl'}></div>}
            </Link>
            <div className={'max-w-[150px] px-1'}>
                <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>{title}</Link>
                <p className={'text-[12px] font-light truncate text-color'}>{authors.join(', ')}</p>
            </div>
        </div>
    );
};

export default PlaylistCard;