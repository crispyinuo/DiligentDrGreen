import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Tab = styled.button`
  padding: 10px;
  margin-right: 5px;
  border: none;
  background-color: ${(props) => (props.active ? '#ffffff' : '#ffffff')};
  border-bottom: ${(props) => (props.active ? '2px solid #B4EF4C' : 'none')};
  color: ${(props) => (props.active ? 'black' : '#D8D8D8')};
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 16px;
`;

const ContentArea = styled.div`
  min-height: 200px;
`;

// Tab components
const TabContent = ({ children }) => {
    return <ContentArea>{children}</ContentArea>;
};

// Main component
const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <>
            <TabsContainer>
                <Tab onClick={() => setActiveTab('tab1')} active={activeTab === 'tab1'}>
                    Identification
                </Tab>
                <Tab onClick={() => setActiveTab('tab2')} active={activeTab === 'tab2'}>
                    Diagnosis
                </Tab>
            </TabsContainer>
            {activeTab === 'tab1' && <TabContent>Content for tab 1</TabContent>}
            {activeTab === 'tab2' && <TabContent>Content for tab 2</TabContent>}
        </>
    );
};

export default Tabs;
