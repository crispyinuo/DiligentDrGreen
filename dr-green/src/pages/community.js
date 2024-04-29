import * as React from "react";
import { useState } from 'react';
import NavBar from '../components/navBar';
import DrMessage from '../components/drMessage';
import CommunityCard from "../components/communityCard";
import RoundButton from "../components/roundButton";
import styled from "styled-components";
import Cactus from "../images/cactus.png";
import Succulents from "../images/succulents.png";
import Monstera from "../images/monstera.png";
import PeaceLily from "../images/peacelily.png";
import ZzPlant from "../images/zzplant.png";
import Fern from "../images/fern.png";
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 
  max-height: 100vh; // 100% of the viewport height
  width: 100%;       
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  padding: 0 16px; 
  overflow-y: scroll; 
  max-height:60vh; 
  grid-auto-rows: 1fr;
  padding-bottom: 100px;
`;

const OffsetCard = styled(CommunityCard)`
  margin-top: 200px; 
`;

function Community() {

    const navigate = useNavigate();
    const [selectedGroups, setSelectedGroups] = useState(new Set());

    const groupData = [
        { name: "Cactus", image: Cactus, isPopular: true },
        { name: "Succulents", image: Succulents, isPopular: true },
        { name: "Monstera", image: Monstera, isPopular: false },
        { name: "Peace Lily", image: PeaceLily, isPopular: false },
        { name: "Zz Plant", image: ZzPlant, isPopular: false },
        { name: "Fern", image: Fern, isPopular: false },
    ];

    const handleSkip = () => {
        navigate('/feed');
    }

    const handleSelect = (name) => {
        const newSelectedGroups = new Set(selectedGroups);
        if (newSelectedGroups.has(name)) {
            newSelectedGroups.delete(name);
        } else {
            newSelectedGroups.add(name);
        }
        setSelectedGroups(newSelectedGroups);
    };

    const handleNext = () => {
        navigate('/feed'); // Adjust the navigation target
    };

    return (
        <PageContainer>
            <DrMessage message="Choose groups of your interest!" />
            <CardsContainer>
                {groupData.map((group, index) => {
                    const isOffset = index % 2 !== 0 && index === 1;
                    if (isOffset) {
                        return <OffsetCard
                            key={index}
                            name={group.name}
                            imageSrc={group.image}
                            isPopular={group.isPopular}
                            onSelect={handleSelect}
                            selected={selectedGroups.has(group.name)}
                        />
                    }
                    return <CommunityCard
                        key={index}
                        name={group.name}
                        imageSrc={group.image}
                        isPopular={group.isPopular}
                        onSelect={handleSelect}
                        selected={selectedGroups.has(group.name)}
                    />
                })}
            </CardsContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 16px' }}>
                <RoundButton text="Skip" onClick={handleSkip} />
                <RoundButton text="Next" onClick={handleNext} disabled={selectedGroups.size === 0} />
            </div>
            <div className="nav-bar-container">
                <NavBar activeButtonId={3} />
            </div>
        </ PageContainer>
    );
}

export default Community;

