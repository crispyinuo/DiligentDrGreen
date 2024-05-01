
import DrMessage from '../components/drMessage';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Post from '../components/post';
import cactus_post from '../images/Cactus_post.png';
import post2 from '../images/post2.png';
import post3 from '../images/post3.png';
import post4 from '../images/post4.png';
import post5 from '../images/post5.png';
import post6 from '../images/post6.png';
import avatar1 from '../images/Avatar1.png';
import avatar2 from '../images/Avatar2.png';
import avatar3 from '../images/Avatar3.png';
import avatar4 from '../images/Avatar4.png';
import avatar5 from '../images/Avatar5.png';
import avatar6 from '../images/Avatar6.png';
import NavBar from '../components/navBar';
import Plus from '../icons/plus.png';
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
  max-height: 100vh;
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
const TabContent = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  align-items: center; /* This centers children vertically */
  flex: 1;  // Takes up only the necessary space left by other elements
  width: 100%;  // Full width of its container
  overflow-y: auto;  // Allows vertical scrolling within the TabContent
  max-height: 58vh; 
`;
const CardsContainer = styled.div`
  display: flex;  
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll; 
  max-height:58vh; 
  padding-bottom: 100px;
`;

const NavBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;


function Feed() {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <PageContainer>
            <DrMessage message="Meet our community!" />

            <TabsContainer  >
                <Tab onClick={() => setActiveTab('tab1')} active={activeTab === 'tab1'}>
                    Feed
                </Tab>
                <Tab onClick={() => setActiveTab('tab2')} active={activeTab === 'tab2'}>
                    Explore
                </Tab>
            </TabsContainer>
            <TabContent  >
                {activeTab === 'tab1' && (


                    <CardsContainer>
                        <div className="flex flex-col self-start">
                            <div className="w-full text-lg font-bold px-6 tracking-tight leading-5 text-black">
                                My groups
                            </div>
                            <div className="flex gap-2 px-5 mt-3">
                                <div className="justify-center px-6 py-2 text-xs tracking-tight leading-6 text-black whitespace-nowrap bg-white shadow-2xl rounded-[90px]">
                                    Cactus
                                </div>
                                <div className="justify-center px-6 py-2 text-xs tracking-tight leading-6 text-black whitespace-nowrap bg-white shadow-2xl rounded-[90px]">
                                    Succulents
                                </div>
                                <div className="flex justify-center items-center p-1 w-9 h-9 bg-white shadow-2xl rounded-[90px]">
                                    <img
                                        loading="lazy"
                                        src={Plus}
                                        className="w-7 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>

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
                    </CardsContainer>

                )}
                {activeTab === 'tab2' && (
                    <CardsContainer>
                        <Post name='Nancy Wang'
                            avatar={avatar5}
                            content='Excited to add a barrel cactus to my collection! Does anyone have suggestions on the best soil mix and pot size for it?'
                            img={post5}
                            like='6'
                            comment='2' />
                        <Post name='Hugh Smith'
                            avatar={avatar6}
                            content='Help needed: My cactus is showing brown spots on the top. Could it be sunburn or something else? Any advice folks?'
                            img={post6}
                            like='2'
                            comment='3' />

                    </CardsContainer>)}



                <div className="nav-bar-container">
                    <NavBar activeButtonId={3} />
                </div>
            </TabContent>
        </ PageContainer >
    );
}

export default Feed;