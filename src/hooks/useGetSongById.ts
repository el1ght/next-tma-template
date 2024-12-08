import {useEffect, useMemo, useState} from "react";
import {Song} from "@/types";
import toast from "react-hot-toast";

const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<Song | undefined>(undefined);

    useEffect(() => {
        if (!id) {
            return;
        }

        setIsLoading(true);

        const fetchSong = () => {
            const data = [
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


            // async fetch from db
            // const {data, error} = await
            // if (error) {
            //     setIsLoading(false);
            //     return toast.error(error.message);
            // }
            //

            // setSong(data as Song)

            setSong(data.find((song) => song.id === id) as Song)
            setIsLoading(false);
        }

        fetchSong();
    }, [id]);

    return useMemo(() => ({
        isLoading,
        song
    }), [isLoading, song])
}

export default useGetSongById;