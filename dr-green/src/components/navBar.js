import * as React from "react";

// Import the icons
import BookmarkActive from '../icons/Bookmark_active.png';
import BookmarkInactive from '../icons/Bookmark_inactive.png';
import CameraActive from '../icons/Camera_active.png';
import CameraInactive from '../icons/Camera_inactive.png';
import PeopleActive from '../icons/People_active.png';
import PeopleInactive from '../icons/People_inactive.png';

function NavBar() {
    const [active, setActive] = React.useState(1);  // State to track the active button

    // Function to handle click events
    const handleClick = (buttonId) => {
        console.log(`Clicked button ${buttonId}`);
        setActive(buttonId);  // Set the active button state
    };

    return (
        <div className="flex gap-1 justify-between items-center pl-2 py-1.5 pr-2 bg-white shadow-2xl max-w-[250px] rounded-[90px]">
            <button
                className={`flex flex-col justify-center items-center px-6 py-1 rounded-[90px] ${active === 1 ? "bg-lime-300" : "bg-white"}`}
                onClick={() => handleClick(1)}
            >
                <img src={active === 1 ? BookmarkActive : BookmarkInactive} alt="" className="w-7 h-7" />
            </button>
            <button
                className={`flex flex-col justify-center items-center px-6 py-1 rounded-[90px] ${active === 2 ? "bg-lime-300" : "bg-white"}`}
                onClick={() => handleClick(2)}
            >
                <img src={active === 2 ? CameraActive : CameraInactive} alt="" className="w-7 h-7" />
            </button>
            <button
                className={`flex flex-col justify-center items-center px-6 py-1 rounded-[90px] ${active === 3 ? "bg-lime-300" : "bg-white"}`}
                onClick={() => handleClick(3)}
            >
                <img src={active === 3 ? PeopleActive : PeopleInactive} alt="" className="w-7 h-7" />
            </button>
        </div >
    );
}

export default NavBar;
