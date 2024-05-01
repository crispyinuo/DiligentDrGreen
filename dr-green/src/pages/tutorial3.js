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

function TutorialThree() {
    const navigate = useNavigate();
    const navigateToNextPage = () => {
        navigate('/history');
    };
    return (
        <PageContainer onClick={navigateToNextPage}>
            <DrMessageContainer>
                <DrMessage message="Join our leafy community! Connect with fellow plant enthusiasts, share insights, and grow your gardening network. Whether you’re a seasoned green thumb or just starting out, this is your space to learn, share, and blossom !" />
            </DrMessageContainer>
            <div className="nav-bar-container">
                <NavBar activeButtonId={3} />
            </div>
        </PageContainer>
    );
}

export default TutorialThree;
