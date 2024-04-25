import React from 'react';
import { useNavigate } from 'react-router-dom';
import DrGreenLogo from '../icons/dr-green.png';
import Shade from '../icons/shade.png';
import Next from '../icons/next.png';

function DoctorText() {
    return (
        <div className="mt-8 text-5xl font-bold leading-[56px]">
            <span className="text-6xl font-extrabold text-black">HEAL YOUR</span>
            <br />
            <span className="text-6xl font-extrabold text-black">PLANTS</span>
            <br />
            <span className="text-6xl font-extrabold text-black">WITH</span>
            <br />
            <span className="text-6xl font-extrabold text-black">DOCTOR</span>
            <br />
            <span className="text-6xl font-extrabold green-text">GREEN.</span>
        </div>
    );
}

function DoctorLogo() {
    return (
        <div className="flex" style={{ marginLeft: '52px' }}>
            <img loading="lazy" src={DrGreenLogo} width='227px' alt="Doctor Green Logo" />
        </div>
    );
}

function DoctorShade() {
    return (
        <div className="flex justify-center mt-5">
            <img loading="lazy" src={Shade} alt="Shade" />
        </div>
    );
}

function GetStarted() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };
    return (
        <div className="flex flex-col pl-5 mt-7 w-full">
            <div className="flex gap-5">
                <h2 className="flex-auto my-auto text-2xl font-extrabold text-black capitalize leading-[55.92px]">
                    Let's get started
                </h2>
                <button
                    onClick={navigateToLogin}
                    className="flex justify-center items-center p-6 green-button rounded-[90px] mr-5 cursor-pointer button-green" // Added margin-right (mr-5) and cursor-pointer
                    style={{ border: 'none', color: 'white' }}>
                    <img loading="lazy" src={Next} alt="Navigate" />
                </button>
            </div>
        </div>
    );
}

function Home() {
    return (
        <main className="flex flex-col pb-2 mx-auto h-screen w-full bg-neutral-100">
            <div className="flex flex-col pl-3 w-full overflow-auto ">
                <DoctorText />
                <DoctorLogo />
                <DoctorShade />
            </div>
            <GetStarted />
        </main >
    );
}

export default Home;