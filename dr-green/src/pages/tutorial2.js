import * as React from "react";
import NavBar from '../components/navBar';
import DrMessage from '../components/drMessage';
import styled from "styled-components";
import EmptyImage from "../images/empty.png";
import { useNavigate } from 'react-router-dom';

// Styled components
const PageContainer = styled.div`
    position: relative;
    height: 100%;  
    background-image: url(${EmptyImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(169, 169, 169, 0.2); 
        backdrop-filter: blur(4px); 
    }
`;

const DrMessageContainer = styled.div`
    position: absolute;
    bottom: 70px;
`;

function TutorialTwo() {
    const navigate = useNavigate();
    const navigateToNextPage = () => {
        navigate('/tutorialthree');
    };
    return (
        <PageContainer onClick={navigateToNextPage}>
            <DrMessageContainer>
                <DrMessage message="Welcome to the identification station! Just snap a picture of your plant, and I'll help you figure out what it is and if it’s facing any health issues. Let’s make sure your green friends are thriving!" />
            </DrMessageContainer>
            <div className="nav-bar-container">
                <NavBar activeButtonId={2} />
            </div>
        </PageContainer>
    );
}

export default TutorialTwo;
