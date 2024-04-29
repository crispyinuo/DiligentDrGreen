import * as React from 'react';
import FireIcon from '../icons/fire.png';
import RectangleButton from '../components/rectangleButton';

function CommunityCard({ name, imageSrc }) {
    return (
        <div className="flex flex-col p-2 font-bold text-black whitespace-nowrap bg-white rounded-2xl max-w-[172px]" >
            <div className="relative">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={name}
                    className="self-center w-full aspect-square"
                />
                <img src={FireIcon} alt="Fire icon" className="absolute top-2 right-2" />
            </div>
            <div className="flex gap-1.5 justify-between mt-2">
                <div className="my-auto text-lg tracking-tight leading-5">{name}</div>
                {/* <div className="flex items-center justify-center px-3 py-1.5 text-xs font-medium tracking-normal leading-4 bg-lime-300 rounded-lg shadow-2xl">
                    Join
                </div> */}
                <RectangleButton text="Join" />
            </div>
        </ div>
    );
}

export default CommunityCard;
