"use client"

import {Song} from "@/types";
import SongItem from "@/components/SongItem/SongItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
    songs: Song[] | any;
}

const LikedContent: React.FC<LikedContentProps> = ({
   songs
}) => {
    const onPlay = useOnPlay(songs);

    if (songs.length === 0) {
        return (
            <div className="mt-2 text-neutral-400">
                No songs available.
            </div>
        )
    }
    return (
        <div className={'flex flex-col gap-y-0.5'}>
            {
                songs.map((item: any) => (
                    <SongItem
                        key={item.id}
                        onClick={(id: string) => onPlay(id)}
                        data={item}
                    />
                ))
            }
        </div>
    );
};

export default LikedContent;