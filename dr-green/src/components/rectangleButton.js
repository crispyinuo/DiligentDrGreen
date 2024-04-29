import * as React from 'react';

function RectangleButton({ text }) {
    return (
        <div className="flex items-center justify-center px-3 py-1.5 text-xs font-medium tracking-normal leading-4 bg-lime-300 rounded-lg shadow-2xl">
            {text}
        </div>
    );
}

export default RectangleButton;
