import * as React from "react";
import Gallery from '../icons/gallery.png';
import text from '../icons/text.png';

function CameraBottomBar({ onTakePhoto, onImageUpload }) {
    const [icon1Clicked, setIcon1Clicked] = React.useState(false);
    const [icon2Clicked, setIcon2Clicked] = React.useState(false);
    const [icon3Clicked, setIcon3Clicked] = React.useState(false);

    const handleIcon1Click = () => {
        setIcon1Clicked(!icon1Clicked);
        onImageUpload();
    };

    const handleIcon2Click = () => {
        setIcon2Clicked(!icon2Clicked);
        onTakePhoto();
    };

    const handleIcon3Click = () => {
        setIcon3Clicked(!icon3Clicked);
    };

    return (
        <div className="flex flex-col justify-center pt-3 pb-7 bg-white bg-blend-hard-light backdrop-blur-[25px] h-[84px]">
            <div className="flex gap-5 justify-between items-center px-16 w-full">
                <button
                    onClick={handleIcon1Click}
                    className="shrink-0 self-stretch my-auto w-7 aspect-square"
                >
                    <img
                        loading="lazy"
                        src={Gallery}
                        alt="Icon 1"
                        className="w-full h-full object-contain"
                    />
                </button>

                <button
                    onClick={handleIcon2Click}
                    className="flex flex-col justify-center p-2 rounded-full border-4 border-lime-300 border-solid"
                >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-neutral-100" />
                </button>
                <button
                    onClick={handleIcon3Click}
                    className="shrink-0 self-stretch my-auto w-7 aspect-square"
                >
                    <img
                        loading="lazy"
                        src={text}
                        alt="Icon 2"
                        className="w-full h-full object-contain"
                    />
                </button>
            </div>
        </div>
    );
}

export default CameraBottomBar;