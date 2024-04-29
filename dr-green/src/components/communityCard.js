import * as React from 'react';
import FireIcon from '../icons/fire.png';
import RectangleButton from '../components/rectangleButton';

function CommunityCard({ name, imageSrc, isPopular = false }) {
    return (
        <div className="flex flex-col p-2 font-bold text-black whitespace-nowrap bg-white rounded-2xl max-w-[172px]" >
            <div className="relative">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={name}
                    className="self-center w-full aspect-square"
                />
                {isPopular && (
                    <img src={FireIcon} alt="Fire icon" className="absolute top-2 right-2" />
                )}
            </div>
            <div className="flex gap-1.5 justify-between mt-2">
                <div className="my-auto text-lg tracking-tight leading-5">{name}</div>
                <RectangleButton text="Join" />
            </div>
        </ div>
    );
}

export default CommunityCard;
