"use client"

import logo from "../../assets/logo.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {IoPerson, IoPersonAdd, IoSearch} from "react-icons/io5";
import Image from "next/image";
import {PiPlaylistBold} from "react-icons/pi";
import {useLaunchParams} from "@telegram-apps/sdk-react";

const NavigationBar = () => {
    const pathname = usePathname();
    const lp = useLaunchParams();

    return (
        <div className={`${lp?.platform === 'ios' ? 'bottom-5' : 'bottom-2' } left-2 right-2 absolute flex p-1 section-bg-color section-separator-color-border rounded-3xl justify-between items-center shadow border`}>

            <Link href={'/search'} className={`navigation-button flex p-6 rounded-3xl  justify-center items-center transition-all shadow-md ${pathname === '/search' ? 'button-color' : 'section-separator-color'}`}>
                <IoSearch className={'text-color'} size={20} />
            </Link>
            <Link href={'/friends'} className={`navigation-button flex p-6 rounded-3xl  justify-center items-center transition-all shadow-md ${pathname === '/friends' ? 'button-color': 'section-separator-color'}`}>
                <IoPersonAdd className={'text-color'} size={20} />
            </Link>

            <Link href={'/'}>
                <Image src={logo} alt={"Logo"} width={40} height={40} />
            </Link>

            <Link href={'/playlists'} className={`navigation-button flex p-6 rounded-3xl section-separator-color justify-center items-center transition-all shadow-md ${pathname === '/playlists' ? 'button-color': 'section-separator-color'}`}>
                <PiPlaylistBold className={'text-color'} size={20} />
            </Link>
            <Link href={'/me'} className={`navigation-button flex p-6 rounded-3xl section-separator-color justify-center items-center transition-all shadow-md ${pathname === '/me' ? 'button-color': 'section-separator-color'}`}>
                <IoPerson className={'text-color'} size={20} />
            </Link>

        </div>
    );
};

export default NavigationBar;