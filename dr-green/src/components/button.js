import * as React from "react";

function Button({ text }) {
    return (
        <button className="justify-center items-center mt-8 px-16 py-3 text-lg font-bold tracking-tight leading-5 text-black whitespace-nowrap bg-lime-300 shadow-2xl max-w-[207px] rounded-[90px]">
            {text}
        </button>
    );
}

export default Button;