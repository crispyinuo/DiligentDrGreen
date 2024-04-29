import * as React from "react";

function RoundButton({ text, onClick, stage }) {
    let backgroundColor, textColor, clickHandler;

    switch (stage) {
        case 'active':
            backgroundColor = 'bg-lime-300'; // lime green color for active state
            textColor = 'text-black';
            clickHandler = onClick;
            break;
        case 'disenabled':
            backgroundColor = 'bg-[#EDEDED]';
            textColor = 'text-[#A9A9A9]';
            clickHandler = null;
        default:
            backgroundColor = 'bg-white';
            clickHandler = onClick;
    }

    return (
        <button
            onClick={clickHandler}
            className={`justify-center items-center mt-4 px-16 py-3 text-lg font-bold tracking-tight leading-5 whitespace-nowrap  max-w-[207px] rounded-[90px] ${backgroundColor} ${textColor}`}
            disabled={stage === 'disenabled'}
        >
            {text}
        </button>
    );
}

export default RoundButton;
