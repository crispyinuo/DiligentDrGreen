import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const ChatBubble = styled.div`
  background-color: white;
  margin: 8px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 90%; /* Adjust width as needed */
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px; /* Space for image */
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

const PlaceholderImage = styled.div`
  width: 60px; /* Adjust size as needed */
  height: 60px;
  background-color: #ddd;
  border-radius: 10%;
`;

const History = () => {
    const StyleSheet = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

    }
    const headerStyle = {
        width: '100%', // take full width to align title and placeholder
        display: 'flex', // use flexbox to align items in a row
        alignItems: 'center', // vertically center items in the header
        paddingLeft: "30px", // padding from the left edge of the screen
        boxSizing: 'border-box', // include padding in the width calculation
        paddingTop: "30px",
        paddingBottom: "10px"
    };
    const placeholderImageStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#ddd",
        paddingLeft: "50px"
        // space between the image and the heading text
    };
    const messages = [
        { id: 1, title: 'Title', date: '2024/3/5', description: 'Descriptive text for the card goes here.' },
        { id: 2, title: 'Title', date: '2024/3/10', description: 'Descriptive text for the card goes here.' },
        { id: 3, title: 'Title', date: '2024/4/5', description: 'Descriptive text for the card goes here.' },
        { id: 4, title: 'Title', date: '2024/4/10', description: 'Descriptive text for the card goes here.' }
        // ... Add more message objects here
    ];
    return (
        <div style={StyleSheet}>
            <Container>
                <div style={headerStyle}>
                    <div style={placeholderImageStyle}></div>
                    <h1 style={{ color: "black", fontFamily: "sans-serif", paddingLeft: "20px", alignSelf: 'flex-start', fontSize: 30 }}>Hi there!</h1>
                </div>

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
            </Container>

        </div >
    )
}

export default History;