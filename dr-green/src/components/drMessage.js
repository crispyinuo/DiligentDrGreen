import * as React from "react";
import drGreenLogo from '../icons/dr-green.png';

import styled from "styled-components";

const MessageContainer = styled.div`
  width: 100%;
  display: flex; 
  padding: 20px; 
  align-items: flex-start; 
`;

const Bubble = styled.p`
  background-color: white;justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 40px; 
  padding: 12px 12px; 
  max-width: 100%; 
  word-wrap: break-word; 
  display: inline-block;
  text-overflow: ellipsis; // Add ellipsis if text is too long
  line-height: 1.2; // Adjust line height for better readability
  max-height: 3.6em; // Max height to fit two lines (based on line height)
`;

function DrMessage({ message }) {
    return (
        <MessageContainer>
            <img
                loading="lazy"
                src={drGreenLogo}
                alt="Dr Green"
                style={{ width: 66, height: 72, flexShrink: 0 }}
            />
            <Bubble>
                {message || "Dr. Green is here to help you with all your plant needs!"}
            </Bubble>
        </MessageContainer>
    );
}

export default DrMessage;
