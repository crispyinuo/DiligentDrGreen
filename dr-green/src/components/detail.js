import * as React from "react";
import background from "../icons/background.png"
import styled from 'styled-components';
import return_icon from "../icons/Arrow-left.png"
import Tabs from '../components/tab';
import NavBar from "../components/navBar";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Identify from "../pages/identify";
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
  height: 100%;
  padding-bottom:20px;
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
  min-height: 600px;
  background-color: #F6F6F6;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  text-align: center;
  position: relative;
  overflow-y: auto;  // Allows vertical scrolling within the TabContent
  max-height: 400px; 
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
  margin: 10px;

  
  
`;
const Title = styled.div`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  padding-top: 5px;
  
`;
const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: black; // Line color
  margin: 8px 0; // Spacing above and below the line
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 
  max-height: 100vh; // 100% of the viewport height
  width: 100%;       
`;

const Detail = ({ navigation, route }) => {
    const diagnosis = useLocation();
    const contentType = diagnosis.state.type;
    // console.log(diagnosis.state.name)
    console.log("diagnosis")
    console.log(diagnosis.state.treatment)
    // console.log(diagnosis.state.taxonomy)
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Button clicked!");
        // Additional action
        navigate(-1);
    };
    return (
        <PageContainer>
            <AppContainer>
                <Header>
                    <button onClick={handleClick} style={{ display: "flex", paddingTop: "44px", paddingLeft: "20px" }}>
                        <img src={return_icon} style={{ height: "24px", width: "24px" }}></img>
                    </button>
                </Header>
                <IdentificationCard>
                    {
                        <>
                            <div style={{ display: "flex", flexDirection: 'column', gap: '9px' }}>
                                <figure   >
                                    <img src={diagnosis.state.img} alt="Plant image" className="rounded-xl" />
                                </figure>
                                <Title>{diagnosis.state.name}</Title>
                                <HorizontalLine />
                                <div style={{ textAlign: 'left' }}>
                                    <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>Description </h1>
                                    <p>{diagnosis.state.description}</p>
                                </div>
                                <HorizontalLine />
                                <div style={{ textAlign: 'left' }}>
                                    <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>{contentType}</h1>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }}>
                                        {
                                            contentType === 'Taxonomy' ? (
                                                <>
                                                    <li>Kindom: {diagnosis.state.taxonomy['kingdom']} </li>
                                                    <li>Phylum: {diagnosis.state.taxonomy['phylum']}  </li>
                                                    <li>Class: {diagnosis.state.taxonomy['class']} </li>
                                                    <li>Family: {diagnosis.state.taxonomy['family']} </li>
                                                    <li>Genus: {diagnosis.state.taxonomy['genus']} </li>
                                                </>
                                            ) : (
                                                <>
                                                    {diagnosis.state.treatment['biological'] && (
                                                        <li>Biological: {diagnosis.state.treatment['biological'][0]}</li>
                                                    )}
                                                    {diagnosis.state.treatment['chemical'] && (
                                                        <li>Chemical: {diagnosis.state.treatment['chemical'][0]}</li>
                                                    )}
                                                    <li>Prevention: {diagnosis.state.treatment['prevention'][0]} </li>

                                                </>

                                            )}
                                    </ul>
                                </div>

                            </div >
                        </>
                    }

                </IdentificationCard>




            </AppContainer>
            <div className="nav-bar-container">
                <NavBar activeButtonId={2} />
            </div>
        </PageContainer>
    );
}
export default Detail;