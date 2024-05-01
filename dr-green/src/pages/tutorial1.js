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

function TutorialOne() {
    const navigate = useNavigate();
    const navigateToNextPage = () => {
        navigate('/tutorialtwo');
    };
    return (
        <PageContainer onClick={navigateToNextPage}>
            <DrMessageContainer>
                <DrMessage message="Your saved plants and diagnoses will appear here. Identify a plant or disease and bookmark the results to revisit anytime!" />
            </DrMessageContainer>
            <div className="nav-bar-container" >
                <NavBar activeButtonId={1} />
            </div>
        </PageContainer>
    );
}

export default TutorialOne;
