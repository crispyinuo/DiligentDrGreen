import * as React from "react";
import GroupCard from "../components/groupCard";
import NavBar from '../components/navBar';

function Community() {
    const groupData = [
        { name: "Plant 1", image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnR8ZW58MHx8MHx8fDA%3D" },
        { name: "Plant 2", image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50fGVufDB8fDB8fHww" },
    ];

    return (
        <main className="flex flex-col px-4 pt-16 w-full bg-zinc-100 min-h-screen">
            <header className="flex gap-3.5">
                <div className="flex flex-col justify-center text-xs tracking-widest leading-4 text-center text-white uppercase whitespace-nowrap">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-green-500 ring-offset-base-100">
                            <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671134.jpg?size=626&ext=jpg" />
                        </div>
                    </div>
                </div>
                <h1 className="flex-auto my-auto text-xl leading-6 text-zinc-900">Pick your interest</h1>
            </header>
            <section className="flex flex-row gap-4 mt-8 overflow-x-auto">
                {groupData.map((group, index) => (
                    <React.Fragment key={index}>
                        <GroupCard groupName={group.name} imageSrc={group.image} />
                        {index < groupData.length - 1 && <div className="mx-2" />}
                    </React.Fragment>
                ))}
            </section>
            <div className="nav-bar-container">
                <NavBar activeButtonId={3} />
            </div>
        </main>
    );
}

export default Community;
