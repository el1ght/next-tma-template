'use client'

import Image from "next/image";
import {Song} from "@/types";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";
import {IoClose, IoPlaySkipBack, IoPlaySkipForward} from "react-icons/io5";
import usePlayer from "@/hooks/usePlayerStore";
import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {FaPlus} from "react-icons/fa";
import {TbRepeat} from "react-icons/tb";
import {PiShuffleBold} from "react-icons/pi";
import {HiSpeakerWave, HiSpeakerXMark} from "react-icons/hi2";
import VolumeSlider from "./VolumeSlider";
import {useLaunchParams} from "@telegram-apps/sdk-react";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
    expand: boolean;
    setExpand: Dispatch<SetStateAction<boolean>>;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
     song,
     songUrl,
     expand,
     setExpand
 }) => {
    const lp = useLaunchParams();

    const player = usePlayer();

    const title = song.title;
    const author = song.author;

    // const {isPlaying, setIsPlaying} = usePlayerStore();
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const [volume, setVolume] = useState(1);
    const [shuffled, setShuffled] = useState(false);
    const [looped, setLooped] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const progressRef = useRef<HTMLInputElement | null>(null);

    const [audioProgress, setAudioProgress] = useState(0);

    const Icon = isPlaying ? BsPauseFill : BsPlayFill;
    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        if(!prevValue) {
            if (audioRef?.current){
                audioRef?.current!.play();
            }

        } else {
            if (audioRef?.current) {
                audioRef?.current!.pause();
            }
        }
        setIsPlaying(!prevValue)
    }

    const handleTimeUpdate = () => {
        if (audioRef?.current){
            setCurrentTime(audioRef.current!.currentTime);
            const progress = parseInt(String((audioRef.current!.currentTime / audioRef.current!.duration) * 100));
            setAudioProgress(isNaN(progress)? 0 : progress)
            progressRef.current?.style.setProperty('--seek-before-width-compact', `${(audioRef.current!.currentTime / audioRef.current!.duration) * 100}%`)
        }
    };

    useEffect(() => {
        handleTimeUpdate()
        const seconds = Math.floor(audioRef.current!.duration);

        setDuration(seconds);

    }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

    const changeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAudioProgress(Number(e.target.value))
        if (audioRef?.current){
            audioRef.current!.currentTime = Number(e.target.value) * audioRef.current!.duration / 100;
        }

    }



    const handleLoadedMetadata = () => {
        if (audioRef?.current) {
            setDuration(audioRef.current!.duration);
        }
    };



    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const onPlayNext = () => {
        if (player.ids.length === 0) {
            return;
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const nextSong = player.ids[currentIndex + 1];

        if (!nextSong) {
            return player.setId(player.ids[0])
        }

        player.setId(nextSong)
    }



    const onPlayPrevious = () => {
        if (player.ids.length === 0) {
            return;
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const previousSong = player.ids[currentIndex - 1];

        if (!previousSong) {
            return player.setId(player.ids[player.ids.length - 1])
        }

        player.setId(previousSong)
    }

    const toggleMute = () => {
        if (volume === 0) {
            setVolume(1);
        } else {
            setVolume(0)
        }
    }

    return (
        <>
            <div className={`absolute flex justify-between  overflow-hidden ${expand ? 'm-0 bottom-0 top-0 w-full h-full transition-all ' : `${lp?.platform === 'ios' ? 'bottom-[100px]' : 'bottom-[88px]' } right-2 left-2`}`}>
                <div className={`overflow-hidden w-full`}>
                    <div className={`border-b relative w-full  section-separator-color-border shadow overflow-hidden transition-all ${expand ? 'h-full rounded-none  secondary-bg-color p-3' : 'section-bg-color rounded-[40px] p-1'}`}>
                        {
                            expand ? (
                                <>
                                    <div className={`flex flex-col h-full gap-y-0.5 transition ${expand ? 'opacity-100 ': 'opacity-0'}`}>

                                        <div className={'grow flex relative'}>
                                            <div className={'z-30 justify-between w-full px-2 pt-2'}>
                                                <div className={'flex justify-between z-20 w-full'}>
                                                    <button onClick={() => setExpand(false)} className={'rounded-full section-bg-color p-5 flex items-center justify-center'}>
                                                        <IoClose size={14} className={'text-color'} />
                                                    </button>
                                                    <button onClick={() => {}} className={'rounded-full section-bg-color p-5 flex items-center justify-center'}>
                                                        <FaPlus size={14} className={'text-color'} />
                                                    </button>
                                                </div>
                                            </div>
                                            <Image src={song.image_path} alt={'image'} width={150} height={150} className={'rounded-3xl filter h-52 w-52 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'} />

                                            <div className={''} onDoubleClick={() => {}}></div>

                                            <div className={''} onDoubleClick={() => {}}></div>
                                        </div>
                                        <div className={'p-6 border section-bg-color section-separator-color-border rounded-[30px]'}>
                                            <div className={'text-center mb-3'}>
                                                <h2 className={'text-color font-medium'}>{song.title}</h2>
                                                <p className={'subtitle-text-color text-[12px]'}>{song.author}</p>
                                            </div>
                                            <div className={'flex justify-between items-center text-[12px] subtitle-text-color mb-1.5'}>
                                                <span>{formatTime(currentTime)}</span>
                                                <span>{(duration && !isNaN(duration) && formatTime(duration)) ? formatTime(duration) : "00:00"}</span>
                                            </div>
                                            <div className={'relative flex justify-center items-center'}>
                                                <input type="range" className={'progress-bar section-separator-color'} value={audioProgress} ref={progressRef} onChange={changeProgress}/>
                                            </div>
                                        </div>
                                        <div className={'rounded-full p-3 border section-bg-color section-separator-color-border flex items-center justify-center sm:justify-between'}>
                                            <div className={'w-[120px] items-center gap-x-2 hidden sm:flex'}>

                                            </div>
                                            <div className={'flex flex-row items-center justify-center gap-x-1'}>
                                                <div onClick={function(){setLooped(!looped); setShuffled(false)}} className={`shadow-xl flex items-center justify-center rounded-full cursor-pointer p-4 transition ${looped ? 'button-color' : 'section-separator-color'}`}>
                                                    <TbRepeat size={16} className={'text-color'} />
                                                </div>
                                                <div onClick={onPlayPrevious} className={'shadow-xl section-separator-color flex items-center justify-center transition rounded-full cursor-pointer p-4'}>
                                                    <IoPlaySkipBack size={16} className={'text-color'} />
                                                </div>
                                                <div onClick={togglePlayPause} className={`cursor-pointer flex items-center justify-center shadow-xl transition rounded-full p-5 ${!isPlaying ? 'button-color' : 'section-separator-color'}`}>
                                                    <Icon size={20} className={'text-color'} />
                                                </div>
                                                <div onClick={onPlayNext} className={'shadow-xl section-separator-color flex items-center justify-center transition rounded-full cursor-pointer p-4'}>
                                                    <IoPlaySkipForward size={16} className={'text-color'} />
                                                </div>
                                                <div onClick={function(){setShuffled(!shuffled); setLooped(false)}} className={`shadow-xl flex items-center justify-center rounded-full cursor-pointer p-4 transition ${shuffled ? 'button-color' : 'section-separator-color'}`}>
                                                    <PiShuffleBold size={16} className={'text-color'} />
                                                </div>
                                            </div>
                                            <div className={' w-[120px] items-center gap-x-2 hidden sm:flex'}>
                                                <VolumeIcon size={20} onClick={toggleMute} className={'cursor-pointer text-color'} />
                                                <VolumeSlider value={volume} onChange={(value) => setVolume(value)} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div className={'w-full h-[2px] absolute top-0 left-0 subtitle-text-color-bg'}>
                                            <div className={'inner-line button-color'} ref={progressRef}></div>
                                        </div>

                                        <div className={'flex items-center justify-between gap-x-2'}>
                                            <div onClick={() => setExpand(true)} className={'flex gap-x-2 items-center cursor-pointer'}>
                                                <Image src={song.image_path} alt={'image'} width={30} height={30} className={'w-[65px] h-[65px] rounded-full'} />
                                                <div className={''}>
                                                    <p className={'text-[15px] truncate text-color'}>{title}</p>
                                                    <p className={'subtitle-text-color truncate text-[12px] block'}>{author}</p>
                                                </div>
                                            </div>

                                            <div className={'flex flex-row items-center gap-x-1 section-separator-color-border rounded-full p-1'}>
                                                <div onClick={togglePlayPause} className={`cursor-pointer flex items-center justify-center shadow-xl transition rounded-full p-4  ${!isPlaying ? 'button-color' : 'section-separator-color'}`}>
                                                    <Icon size={24} className={'text-color'} />
                                                </div>
                                                <div onClick={onPlayNext} className={`shadow-xl flex items-center justify-center transition rounded-full cursor-pointer p-5 section-separator-color`}>
                                                    <IoPlaySkipForward size={16} className={'text-color'} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </>
                            )
                        }

                        <audio
                            autoPlay={true}
                            ref={audioRef}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            src={song.url}
                            onEnded={onPlayNext}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayerContent;