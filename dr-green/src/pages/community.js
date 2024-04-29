import * as React from "react";
import NavBar from '../components/navBar';
import DrMessage from '../components/drMessage';
import CommunityCard from "../components/communityCard";
import styled from "styled-components";
import Cactus from "../images/cactus.png";
import Succulents from "../images/succulents.png";
import Monstera from "../images/monstera.png";
import PeaceLily from "../images/peacelily.png";
import ZzPlant from "../images/zzplant.png";
import Fern from "../images/fern.png";

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
  margin-top: 16px;
  padding: 0 16px; 
  overflow-y: scroll; 
  max-height:70vh; 
  grid-auto-rows: 1fr;
`;

const OffsetCard = styled(CommunityCard)`
  margin-top: 200px; 
`;

function Community() {
    const groupData = [
        { name: "Cactus", image: Cactus, isPopular: true },
        { name: "Succulents", image: Succulents, isPopular: true },
        { name: "Monstera", image: Monstera, isPopular: false },
        { name: "Peace Lily", image: PeaceLily, isPopular: false },
        { name: "Zz Plant", image: ZzPlant, isPopular: false },
        { name: "Fern", image: Fern, isPopular: false },
    ];

    return (
        <PageContainer>
            <DrMessage message="Choose groups of your interest!" />
            <CardsContainer>
                {groupData.map((group, index) => {
                    const isOffset = index % 2 !== 0 && index === 1;
                    if (isOffset) {
                        return <OffsetCard key={index} name={group.name} imageSrc={group.image} isPopular={group.isPopular} />;
                    }
                    return <CommunityCard key={index} name={group.name} imageSrc={group.image} isPopular={group.isPopular} />;
                })}
            </CardsContainer>
            <NavBar activeButtonId={3} />
        </ PageContainer>
    );
}

export default Community;

