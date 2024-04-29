import * as React from 'react';

function RectangleButton({ text, onClick, selected = false }) {
    const backgroundColor = selected ? 'bg-[#f6f6f6]' : 'bg-lime-300';
    const textColor = selected ? 'text-[#a9a9a9]' : 'text-black';

    return (
        <div onClick={onClick} className={`flex items-center justify-center px-3 py-1.5 text-xs font-bold tracking-normal leading-4 ${backgroundColor} ${textColor} rounded-lg shadow-2xl`}>
            {text}
        </div>
    );
}

export default RectangleButton;
