import * as React from "react";
import Button from "../components/button";
import Lock from "../icons/lock.png";
import Mail from "../icons/mail.png";
import { useNavigate } from 'react-router-dom';

function InputField({ icon, placeholder }) {
    return (
        <div className="flex gap-4 px-6 py-3 mt-5 text-base tracking-tight leading-6 whitespace-nowrap bg-white rounded-lg text-zinc-300">
            <img src={icon} alt="" className="shrink-0 w-6 aspect-square" />
            <input type="text" placeholder={placeholder} aria-label={placeholder} />
        </div>
    );
}

function Login() {
    const navigate = useNavigate();

    const navigateToHistory = () => {
        navigate('/history');
    };
    return (
        <div className="flex flex-col px-5 pt-20 pb-5 mx-auto w-full bg-neutral-100 max-w-[480px]">
            <h1 className="mt-2 text-5xl font-bold text-lime-300 leading-[56px]">
                <span className="text-6xl font-extrabold text-black">WELCOME</span>
                <br />
                <span className="text-6xl font-extrabold text-lime-300"> BACK. </span>
            </h1>
            <form className="flex flex-col items-center pt-10">
                <InputField icon={Mail} placeholder="Email" />
                <InputField icon={Lock} placeholder="Password" />
                <Button text="Login" onClick={navigateToHistory} className="pt-10" />
            </form>
            <div className="flex gap-2 self-center mt-2 text-xs tracking-tight leading-5">
                <div className="text-neutral-400">Don't have an account?</div>
                <a href="#" className="font-bold text-lime-300 underline " onClick={navigateToHistory}>
                    Sign up
                </a>
            </div>
            <div className="shrink-0 self-center mt-96 bg-black h-[5px] rounded-[100px] w-[139px]" />
        </div>
    );
}

export default Login;