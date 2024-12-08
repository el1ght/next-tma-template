'use client';

import usePlayer from "@/hooks/usePlayerStore";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";
import {useState} from "react";

const Player = () => {
    const [expand, setExpand] = useState(false);
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUrl = song ? song.url : '';


    if (!song || !songUrl || !player.activeId){
        return null;
    }

    return (

        <PlayerContent key={songUrl} song={song} songUrl={songUrl} expand={expand} setExpand={setExpand} />

    )
}

export default Player;