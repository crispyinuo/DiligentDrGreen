import React, { useState } from 'react';
import styled from 'styled-components';
import Infocard from './Infocard';
import Mammillaria from '../icons/Mammillaria.png'
import plant2 from '../icons/plant2.png'
import plant3 from '../icons/plant3.png'


// Styled components
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  
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
  margin: 10px;

  
  
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
            <TabsContainer  >
                <Tab onClick={() => setActiveTab('tab1')} active={activeTab === 'tab1'}>
                    Identification
                </Tab>
                <Tab onClick={() => setActiveTab('tab2')} active={activeTab === 'tab2'}>
                    Diagnosis
                </Tab>
            </TabsContainer>
            {activeTab === 'tab1' && <TabContent  >
                <Infocard plant="tree" percent="50%" img={Mammillaria} />
                <div style={{ display: "flex", justifyContent: 'space-between', gap: '9px' }}>
                    <Infocard plant="tree" percent="50%" img={plant2} />
                    <Infocard plant="tree" percent="50%" img={plant3} />
                </div>
            </TabContent >}
            {activeTab === 'tab2' && <TabContent>Content for tab 2</TabContent>}
        </>
    );
};

export default Tabs;
