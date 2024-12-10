import Link from "next/link";

interface CommunityWidgetProps {
    handleClick: () => void;
}

const CommunityWidget: React.FC<CommunityWidgetProps> = ({
    handleClick
}) => {
    return (
        <div className={'section-bg-color p-3 rounded-xl flex justify-between mx-3 '}>
            <div onClick={handleClick} className={'flex gap-x-2 items-center cursor-pointer'}>
                <div className={'h-10 w-10 bg-white rounded-full'}></div>
                <div>
                    <h4 className={'font-semibold text-color'}>Charton Community</h4>
                    <p className={'text-[14px] text-color'}>1,000,000,000 </p>
                </div>
            </div>
            <Link href={'https://t.me/devs_cis'} className={'button-color text-color py-2 px-3 rounded-3xl font-semibold flex items-center justify-center active:scale-95 transition'}>
                Follow
            </Link>
        </div>
    );
};

export default CommunityWidget;