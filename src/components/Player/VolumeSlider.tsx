'use client'

import * as RadixSlider from "@radix-ui/react-slider";

interface VolumeSliderProps {
    value?: number;
    onChange?: (value: number) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({
   value = 5,
   onChange
}) => {
    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0]);
    }

    return (
        <RadixSlider.Root className={'relative flex items-center select-none touch-none w-full h-10'} defaultValue={[1]} value={[value]} onValueChange={handleChange} max={50} step={1} aria-label={'Volume'}>
            <RadixSlider.Track className={'bg-neutral-600 relative grow rounded-full h-[3px]'}>
                <RadixSlider.Range className={'absolute bg-white rounded-full h-full'} />
            </RadixSlider.Track>
        </RadixSlider.Root>
    );
};

export default VolumeSlider;