'use client'

import SearchInput from "@/components/SearchInput/SearchInput";
import Image from "next/image";
import {Page} from "@/components/Page";
// import SearchContent from "@/components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = () => {

    return (
        <Page back={true}>
            <div className={'px-3 py-5 box flex flex-col'}>
                <div className={'flex justify-center items-center flex-col gap-y-1'}>
                    <div className={'p-1.5 border-2 border-[#ddd] bg-[#424242]/[.3] rounded-3xl'}>
                        <Image className={'w-[100px] h-[100px] rounded-3xl'} src={'/images/favBg-4.jpg'} alt={'image'} width={50} height={50} />
                    </div>

                    <h2 className={'text-center text-[1.2rem] font-bold mb-4'}>Search</h2>
                </div>
                <div>
                    <SearchInput />
                </div>

                {/*<div>*/}
                {/*    <SearchContent songs={mockSongs} />*/}
                {/*</div>*/}
            </div>
        </Page>
    );
};

export default Search;