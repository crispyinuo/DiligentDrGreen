import * as React from "react";
import Confirm from '../icons/confirm.png';
import Retake from '../icons/retake.png';

function ConfirmBottomBar({ onRetakeClick, onConfirmClick }) {

    const [icon1Clicked, setIcon1Clicked] = React.useState(false);
    const [icon2Clicked, setIcon2Clicked] = React.useState(false);

    const handleIcon1Click = () => {
        setIcon1Clicked(!icon1Clicked);
        onRetakeClick();
    };

    const handleIcon2Click = () => {
        setIcon2Clicked(!icon2Clicked);
        onConfirmClick();
    };

    return (
        <div className="flex flex-col justify-center pt-3 pb-7 bg-white bg-blend-hard-light backdrop-blur-[25px] h-[84px]">
            <div className="flex gap-2 justify-between items-center px-24 w-full">
                <button
                    onClick={handleIcon1Click}
                    className="shrink-0 self-stretch my-auto w-12 aspect-square"
                >
                    <img
                        loading="lazy"
                        src={Retake}
                        alt="Retake Icon"
                        className="w-full h-full object-contain"
                    />
                </button>

                <button
                    onClick={handleIcon2Click}
                    className="shrink-0 self-stretch my-auto w-12 aspect-square"
                >
                    <img
                        loading="lazy"
                        src={Confirm}
                        alt="Confirm Icon"
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>
        </div>
    );
}

export default ConfirmBottomBar;
