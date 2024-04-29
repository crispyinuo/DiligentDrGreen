import * as React from "react";
import NavBar from '../components/navBar';
import DrMessage from '../components/drMessage';
import CommunityCard from "../components/communityCard";

function Community() {
    const groupData = [
        { name: "Plant 1", image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnR8ZW58MHx8MHx8fDA%3D" },
        { name: "Plant 2", image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50fGVufDB8fDB8fHww" },
    ];

    return (
        <main className="flex flex-col px-4 pt-16 w-full bg-zinc-100 min-h-screen">
            <DrMessage message="Choose groups of your interest!" />
            <section className="flex flex-row gap-3 mt-8 overflow-x-auto">
                {groupData.map((group, index) => (
                    <React.Fragment key={index}>
                        <CommunityCard name={group.name} imageSrc={group.image} />
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
