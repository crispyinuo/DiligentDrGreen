import * as React from "react";

function RoundLabel({ text }) {
    return (
        <div
            className={`justify-center items-center mt-4 px-16 py-3 text-md font-bold tracking-tight leading-5 whitespace-nowrap rounded-[90px] `}
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                color: "black"
            }}
        >
            {text}
        </div>
    );
}

export default RoundLabel;
