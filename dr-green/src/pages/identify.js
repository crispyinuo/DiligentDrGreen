import * as React from "react";
import background from "../icons/background.png"
import styled from 'styled-components';
import return_icon from "../icons/Arrow-left.png"
import Tabs from '../components/tab';
import NavBar from "../components/navBar";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: auto;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  position: relative;
  background: url(${background}) center center;
  background-size: cover;
  height: 400px;
`;



const NavButton = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? 'black' : '#aaa')};
  cursor: pointer;
`;

const IdentificationCard = styled.div`
   height: 705px;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  text-align: center;
  position: relative;
`;

const IdentificationImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PlantName = styled.h2`
  margin: 10px 0;
`;

const DetailsButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`;

// Placeholder data
const plantIdentification = {
    image: 'cactus-image.jpg',
    name: 'Mammillaria spinosissima',
    confidence: '60.5%'
};

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Tab = styled.button`
  padding: 10px;
  margin-right: 5px;
  border: none;
  background-color: ${(props) => (props.active ? '#eee' : '#f9f9f9')};
  border-bottom: ${(props) => (props.active ? '2px solid #333' : 'none')};
  cursor: pointer;
`;

const ContentArea = styled.div`
  min-height: 200px;
`;
function Identify() {
    return (
        <AppContainer>
            <Header>
                <div style={{ display: "flex", paddingTop: "44px", paddingLeft: "20px" }}>
                    <img src={return_icon} style={{ height: "24px", width: "24px" }}></img>
                </div>
                <IdentificationCard>
                    <Tabs />
                    <div className="nav-bar-container">
                        <NavBar activeButtonId={2} />
                    </div>
                </IdentificationCard>

            </Header>

        </AppContainer>
    );
}


export default Identify;