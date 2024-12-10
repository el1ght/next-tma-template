'use client'

import SongItem from "@/components/SongItem/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {initData, openTelegramLink, useSignal} from '@telegram-apps/sdk-react';
import CommunityWidget from "@/components/HomeLayout/CommunityWidget";
import PlaylistsCarousel from "@/components/HomeLayout/PlaylistsCarousel";
import PlaylistCard from "@/components/HomeLayout/PlaylistCard";

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

const HomeLayout = () => {
    const initDataUser = useSignal(initData.user);

    //Check if from Telegram

    const handleClick = () => {
        openTelegramLink('https://t.me/heyqbnk');
    }

    return (
        <div className={'relative py-5 pb-20 box flex flex-col gap-y-8 text-color'} >
            <CommunityWidget handleClick={handleClick} />
            {initDataUser ? (
                <>
                    <div className={'flex flex-col gap-y-3'}>
                        <div className={'text-[20px] font-bold text-color ml-3'}>
                            Hey, <span className={'subtitle-text-color'}>{initDataUser.firstName}</span>, wanna smth special?
                        </div>
                        <div className={'px-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>
                            <PlaylistCard
                                link={'/playlist/414154513'}
                                image_url={'/images/favBg-4.jpg'}
                                title={'Winter Mix'}
                                authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                                isAlbum={false}
                            />
                            <PlaylistCard
                                link={'/playlist/414154513'}
                                image_url={'/images/favBg-4.jpg'}
                                title={'World Top'}
                                authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                                isAlbum={false}
                            />
                            <PlaylistCard
                                link={'/playlist/414154513'}
                                image_url={'/images/favBg-4.jpg'}
                                title={'Summer Mix'}
                                authors={['Lana Del Rey', '21 Savage', 'Arctic Monkeys']}
                                isAlbum={false}
                            />
                        </div>
                    </div>

                    <PlaylistsCarousel
                        title={'Based on your preferences'}
                        isAlbum={false}
                        isAuthor={false}
                        isSimilar={false}
                        authorName={''}
                    />

                    <PlaylistsCarousel
                        title={'Miss you'}
                        isAlbum={true}
                        isAuthor={false}
                        isSimilar={false}
                        authorName={''}
                    />

                    <PlaylistsCarousel
                        title={''}
                        isAlbum={false}
                        isAuthor={true}
                        isSimilar={false}
                        authorName={'LXST CXNTURY'}
                    />

                    <PlaylistsCarousel
                        title={'From your playlists'}
                        isAlbum={false}
                        isAuthor={false}
                        isSimilar={false}
                        authorName={''}
                    />

                    <div className={'flex flex-col gap-y-3 mx-3'}>
                        <div className={'text-[18px] font-bold text-color flex justify-between'}>
                            <h3>Mix for you</h3>
                            <Link href={'/mix'} className={'font-normal text-[12px] flex items-center justify-center py-1 px-3 border section-separator-color-border rounded-3xl'}>
                                More
                            </Link>
                        </div>
                        <div className={'flex flex-col gap-y-1'}>
                            {
                                mockSongs!.map((item: any) => (
                                    <SongItem
                                        key={item.id}
                                        onClick={() => {}}
                                        data={item}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <PlaylistsCarousel
                        title={'Playlists for you'}
                        isAlbum={false}
                        isAuthor={false}
                        isSimilar={false}
                        authorName={''}
                    />

                    <PlaylistsCarousel
                        title={''}
                        isAlbum={false}
                        isAuthor={false}
                        isSimilar={true}
                        authorName={'LXST CXNTURY'}
                    />

                    <PlaylistsCarousel
                        title={'Albums for you'}
                        isAlbum={true}
                        isAuthor={false}
                        isSimilar={false}
                        authorName={''}
                    />

                    <PlaylistsCarousel
                        title={''}
                        isAlbum={false}
                        isAuthor={true}
                        isSimilar={false}
                        authorName={'Night Lovell'}
                    />

                    <div className={'absolute bottom-6 left-0 right-0 text-center subtitle-text-color mr-3'}>
                        <p className={'text-[12px]'}>Didn't find anything for yourself?</p>
                        <p className={'text-[12px]'}>Try our smart (common) search</p>
                    </div>
                </>
            ) : (
                <div className={'flex flex-col gap-y-3'}>
                    <div className={'text-[20px] font-bold text-color ml-3'}>
                        Hey, <span className={'subtitle-text-color'}>Sweetie</span>, wanna smth special?
                    </div>
                    <h2>Loading...</h2>
                </div>
            )
        }
        </div>
        )
        {/* userData ? (*/}
        {/*    <div className={'relative py-5 pb-20 box flex flex-col gap-y-8 text-color'} >*/}

        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color ml-3'}>*/}
        {/*                Based on your preferences*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color ml-3'}>*/}
        {/*                Miss you*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={' relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'flex items-center gap-x-2 ml-3'}>*/}
        {/*                <Link href={'/artists/42352543'} className={'w-10 h-10 bg-neutral-400 rounded-full'}></Link>*/}
        {/*                <Link href={'/artists/42352543'} className={'text-[20px] font-bold text-color'}>LXST CXNTURY</Link>*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color ml-3'}>*/}
        {/*                From your playlists*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'flex flex-col gap-y-3 mx-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color flex justify-between'}>*/}
        {/*                <h3>Mix for you</h3>*/}
        {/*                <Link href={'/mix'} className={'font-normal text-[12px] flex items-center justify-center py-1 px-3 border section-separator-color-border rounded-3xl'}>*/}
        {/*                    More*/}
        {/*                </Link>*/}
        {/*            </div>*/}
        {/*            <div className={'flex flex-col gap-y-1'}>*/}
        {/*                {*/}
        {/*                    mockSongs!.map((item: any) => (*/}
        {/*                        <SongItem*/}
        {/*                            key={item.id}*/}
        {/*                            onClick={() => {}}*/}
        {/*                            data={item}*/}
        {/*                        />*/}
        {/*                    ))*/}
        {/*                }*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color ml-3'}>*/}
        {/*                Playlists for you*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'flex items-center gap-x-2 ml-3'}>*/}
        {/*                <div className={'w-10 h-10 bg-neutral-400 rounded-xl'}></div>*/}
        {/*                <div className={'flex flex-col gap-y-1'}>*/}
        {/*                    <p className={'uppercase text-[16px] font-normal subtitle-text-color leading-4'}>Similar to</p>*/}
        {/*                    <h4 className={'text-[20px] font-bold leading-5 text-color'}>LXST CXNTURY</h4>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'text-[18px] font-bold text-color ml-3'}>*/}
        {/*                Albums for you*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}
        {/*                        <div className={'absolute w-[30%] bg-[#424242] top-0 right-0 bottom-0 rounded-r-3xl'}></div>*/}
        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'flex flex-col gap-y-3'}>*/}
        {/*            <div className={'flex items-center gap-x-2 ml-3'}>*/}
        {/*                <Link href={'/artists/42352543'} className={'w-10 h-10 bg-neutral-400 rounded-full'}></Link>*/}
        {/*                <Link href={'/artists/42352543'} className={'text-[20px] font-bold text-color'}>Night Lovell</Link>*/}
        {/*            </div>*/}
        {/*            <div className={'pl-3 w-full min-h-[160px] overflow-x-scroll overflow-hidden whitespace-nowrap flex gap-x-1'}>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}

        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}

        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className={'align-top active:scale-95 transition'}>*/}
        {/*                    <Link href={'/playlist/414154513'} className={'relative block rounded-3xl h-[150px] w-[150px] bg-neutral-400 p-3 mb-1'}>*/}
        {/*                        image*/}

        {/*                    </Link>*/}
        {/*                    <div className={'max-w-[150px] px-1'}>*/}
        {/*                        <Link href={'/playlist/414154513'} className={'text-[16px] font-semibold truncate text-color'}>Winter Mix</Link>*/}
        {/*                        <p className={'text-[12px] font-light truncate text-color'}>Lana Del Rey, 21 Savage, Arctic Monkeys</p>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className={'absolute bottom-2 left-0 right-0 text-center subtitle-text-color mr-3'}>*/}
        {/*            <p className={'text-[12px]'}>Didn't find anything for yourself?</p>*/}
        {/*            <p className={'text-[12px]'}>Try our smart (common) search</p>*/}
        {/*        </div>*/}

        {/*    </div>*/}
        {/*) : (*/}
        {/*    <div className={'h-full px-3 py-5'}>*/}
        {/*        Loading...*/}
        {/*    </div>*/}

        {/*)*/}
};

export default HomeLayout;