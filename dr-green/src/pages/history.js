import React from 'react';
import styled from 'styled-components';
import DrMessage from '../components/drMessage';
import image1 from '../images/history_image 1.png';
import image2 from '../images/history_image 2.png';
import image3 from '../images/history_image 3.png';
import image4 from '../images/history_image 4.png';
import time_icon from '../icons/Time.png';
import identify_icon from '../icons/Scanning.png'
import diagnosis_icon from '../icons/Stethoscope.png'
import NavBar from '../components/navBar';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;  
  width: 100%;       
`;

const ChatBubble = styled.div`
  background-color: white;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 90%;  /* Responsive width */
  gap: 15px;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: -20px;
  
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  
`;

const DateText = styled.div`
  color: #999;
  font-size: 0.8em;
  margin-bottom: 8px;
`;

const Description = styled.div`
  color: #A9A9A9;
  font-size: 12px;
  paddingTop: 12px;
`;

const History = () => {
    const messages = [
        { id: 1, title: 'Plant Name', content: "Identification", date: '2024.3.5', description: 'Descriptive text for the card goes here.', img: image1, icon: identify_icon },
        { id: 2, title: 'Disease Name', content: "Diagnosis", date: '2024.3.10', description: 'Descriptive text for the card goes here.', img: image2, icon: diagnosis_icon },
        { id: 3, title: 'Plant Name', content: "Identification", date: '2024.4.5', description: 'Descriptive text for the card goes here.', img: image3, icon: identify_icon },
        { id: 4, title: 'Disease Name', content: "Diagnosis", date: '2024.4.10', description: 'Descriptive text for the card goes here.', img: image4, icon: diagnosis_icon }
    ];

    return (
        <PageContainer>
            <DrMessage />
            {messages.map((message) => (
                <ChatBubble key={message.id}>
                    <div class="avatar">
                        <div class="w-24 rounded">
                            <img src={message.img} />
                        </div>
                    </div>
                    <MessageContent>
                        <Title>{message.title}</Title>
                        <div style={{ display: "flex", gap: "4px" }}>
                            <div className="badge badge-ghost badge-sm" style={{ backgroundColor: "#F6F6F6", border: "none" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <img src={message.icon} style={{ width: "12px", height: "12px" }} />
                                    <div style={{ color: "#A9A9A9", fontSize: "10px" }}>{message.content}</div>
                                </div>
                            </div>
                            <div className="badge badge-ghost badge-sm" style={{ backgroundColor: "#F6F6F6", border: "none" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <img src={time_icon} style={{ width: "12px", height: "12px" }} />
                                    <div style={{ color: "#A9A9A9", fontSize: "10px" }}>{message.date}</div>
                                </div>
                            </div>
                        </div>
                        <Description>{message.description}</Description>
                    </MessageContent>
                </ChatBubble>
            ))
            }
            <div className="nav-bar-container">
                <NavBar activeButtonId={1} />
            </div>
        </PageContainer >
    );
}

export default History;
