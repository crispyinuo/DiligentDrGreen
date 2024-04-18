import * as React from "react";
import drGreenLogo from '../icons/dr-green.png';


function DrMessage({ message }) {
    return (
        <div className="flex gap-0 text-xs tracking-normal leading-4 text-black">
            <img
                loading="lazy"
                src={drGreenLogo}
                alt="Dr green"
                className="shrink-0 aspect-[0.92] w-[66px]"
            />
            <p className="grow justify-center self-start py-3 pr-5 pl-10 mt-6 bg-white shadow-2xl rounded-[90px] w-fit">
                All your bookmarked findings are here!
            </p>
        </div>
    );
}

export default DrMessage;