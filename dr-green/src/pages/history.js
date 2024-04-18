import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;  
  width: 100%;       
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
`;

const PlaceholderImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 20px;
`;

const ChatBubble = styled.div`
  background-color: white;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 90%;  /* Responsive width */
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateText = styled.div`
  color: #999;
  font-size: 0.8em;
  margin-bottom: 8px;
`;

const Description = styled.div`
  color: #333;
`;

const History = () => {
  const messages = [
    { id: 1, title: 'Title', date: '2024/3/5', description: 'Descriptive text for the card goes here.' },
    { id: 2, title: 'Title', date: '2024/3/10', description: 'Descriptive text for the card goes here.' },
    { id: 3, title: 'Title', date: '2024/4/5', description: 'Descriptive text for the card goes here.' },
    { id: 4, title: 'Title', date: '2024/4/10', description: 'Descriptive text for the card goes here.' }
  ];

  return (
    <PageContainer>
      <Header>
        <PlaceholderImage />
        <h1 style={{ color: "black", fontFamily: "sans-serif", fontSize: "30px" }}>Hi there!</h1>
      </Header>

      {messages.map((message) => (
        <ChatBubble key={message.id}>
          <MessageContent>
            <DateText>{message.date}</DateText>
            <Title>{message.title}</Title>
            <Description>{message.description}</Description>
          </MessageContent>
          <PlaceholderImage />
        </ChatBubble>
      ))}
    </PageContainer>
  );
}

export default History;
