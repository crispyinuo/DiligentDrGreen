import * as React from "react";

// Import the icons
import ScanActive from '../icons/Scan_active.png';
import ScanInactive from '../icons/Scan_inactive.png';
import DiagnosisActive from '../icons/Diagnosis_active.png';
import DiagnosisInactive from '../icons/Diagnosis_inactive.png';
import '../style.css';

function IdentifyDiagnosisBar() {
    const [active, setActive] = React.useState(1);  // State to track the active button

    // Function to handle click events
    const handleClick = (buttonId) => {
        console.log(`Clicked button ${buttonId}`);
        setActive(buttonId);  // Set the active button state
    };

    return (
        <div className="flex gap-1 justify-between items-center pl-2 py-1.5 pr-2 bg-white shadow-2xl max-w-[170px] rounded-[90px]">
            <button
                className={`flex flex-col justify-center items-center px-6 py-1 rounded-[90px] ${active === 1 ? "bg-lime-300" : "bg-white"}`}
                onClick={() => handleClick(1)}
            >
                <img src={active === 1 ? ScanActive : ScanInactive} alt="" className="w-7 h-7" />
            </button>
            <button
                className={`flex flex-col justify-center items-center px-6 py-1 rounded-[90px] ${active === 2 ? "bg-lime-300" : "bg-white"}`}
                onClick={() => handleClick(2)}
            >
                <img src={active === 2 ? DiagnosisActive : DiagnosisInactive} alt="" className="w-7 h-7" />
            </button>
        </div >
    );
}

export default IdentifyDiagnosisBar;
