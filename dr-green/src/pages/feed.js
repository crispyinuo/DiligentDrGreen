
import DrMessage from '../components/drMessage';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Post from '../components/post';
import cactus_post from '../images/Cactus_post.png';
import post2 from '../images/post2.png';
import post3 from '../images/post3.png';
import post4 from '../images/post4.png';
import avatar1 from '../images/Avatar1.png';
import avatar2 from '../images/Avatar2.png';
import avatar3 from '../images/Avatar3.png';
import avatar4 from '../images/Avatar4.png';
import NavBar from '../components/navBar';
import time_icon from '../icons/Time.png';
import identify_icon from '../icons/Scanning.png'
import diagnosis_icon from '../icons/Stethoscope.png'
import image4 from '../images/history_image 4.png';
import { useNavigate } from 'react-router-dom';
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 
  max-height: 100vh; // 100% of the viewport height
  width: 100%;       
`;

const Tab = styled.button`
  padding: 5px;
  padding-bottom: 0px;
  margin-right: 5px;
  border: none;
  background-color: #F6F6F6;
  border-bottom: ${(props) => (props.active ? '2px solid #B4EF4C' : 'none')};
  color: ${(props) => (props.active ? 'black' : '#D8D8D8')};
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 16px;
`;
const ContentArea = styled.div`
  min-height: 600px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* This centers children vertically */
  height: 100%; /* You need a defined height for the container */
  flex: 1;  // Takes up only the necessary space left by other elements
  width: 100%;  // Full width of its container
  overflow-y: auto;  // Allows vertical scrolling within the TabContent
  max-height: calc(100vh - 50px); 
  padding-top: 900px;
  
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

// Tab components
const TabContent = ({ children }) => {
    return <ContentArea>{children}</ContentArea>;
};

function Feed() {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <PageContainer>
            <main>
                <DrMessage message="Meet our community!" />

                <TabsContainer  >
                    <Tab onClick={() => setActiveTab('tab1')} active={activeTab === 'tab1'}>
                        Feed
                    </Tab>
                    <Tab onClick={() => setActiveTab('tab2')} active={activeTab === 'tab2'}>
                        Explore
                    </Tab>
                </TabsContainer>
                {activeTab === 'tab1' && (

                    <TabContent  >
                        <Post name='Ada Jones'
                            avatar={avatar1}
                            content='Excited to add a barrel cactus to my collection! Does anyone have suggestions on the best soil mix and pot size for it?'
                            img={cactus_post}
                            like='12'
                            comment='2' />
                        <Post name='Alex Wilson'
                            avatar={avatar2}
                            content='Help needed: My cactus is showing brown spots on the top. Could it be sunburn or something else? Any advice folks?'
                            img={post2}
                            like='2'
                            comment='1' />
                        <Post name='Jenny Chen'
                            avatar={avatar3}
                            content="I'm new to indoor succulents and could use some advice. What’s the best watering schedule to keep them thriving?"
                            img={post3}
                            like='8'
                            comment='1' />
                        <Post name='Emma Parker'
                            avatar={avatar4}
                            content='My jade plant just started blooming! It’s gorgeous. Does anyone know if blooming affects its watering or feeding needs?'
                            img={post4}
                            like='7'
                            comment='1' />
                    </TabContent >
                )}
                {activeTab === 'tab2' && (
                    <TabContent>

                    </TabContent>)}



                <div className="nav-bar-container">
                    <NavBar activeButtonId={3} />
                </div>
            </main>
        </ PageContainer>
    );
}

export default Feed;