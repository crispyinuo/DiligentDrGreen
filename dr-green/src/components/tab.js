import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Infocard from './Infocard';
import error from '../images/Error.png'
import Mammillaria from '../icons/Mammillaria.png'
import plant2 from '../icons/plant2.png'
import plant3 from '../icons/plant3.png'


// Styled components
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  
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
  margin: 10px;
  display: flex;
  flex-direction: column;  justify-content: flex-start;
  align-items: center; /* This centers children vertically */
  height: 100%; /* You need a defined height for the container */
  gap: 24px;
  overflow-y: auto; 
  max-height: 500px; 
`;


// Tab components
const TabContent = ({ children }) => {
    return <ContentArea>{children}</ContentArea>;
};


// Main component
const Tabs = ({ photo, type }) => {
    const [activeTab, setActiveTab] = useState('tab1');
    useEffect(() => {
        // Determine which tab should be active based on the photo parameter
        console.log(type);
        const newActiveTab = type == "1" ? 'tab1' : 'tab2';
        setActiveTab(newActiveTab);
    }, [type]);
    const [data, setData] = useState(null);
    const [base64Image, setBase64Image] = useState('');
    const [identificationData, setIdentificationData] = useState(null);
    const [diagnosisData, setDiagnosisData] = useState(null);
    const [descriptionData, setDescriptionData] = useState(null);
    const convertToPercentage = (decimalStr) => {
        const decimalNumber = parseFloat(decimalStr);
        return (decimalNumber * 100).toFixed(2) + '%';
    };
    const realimageURL = { photo }
    const base64data = realimageURL.photo;

    useEffect(() => {
        if (activeTab === 'tab1' && !identificationData) {
            uploadImage(base64data, 'identification');
        } else if (activeTab === 'tab2' && !diagnosisData) {
            uploadImage(base64data, 'health_assessment');
        }
    }, [activeTab, identificationData, diagnosisData]);

    function uploadImage(base64Data, func) {
        fetch('https://plant.id/api/v3/' + func, {
            method: 'POST',
            headers: {
                'Api-Key': 'EYRBBKg1LlXbNxUt4gPNUieiMEDWKNbWl091p23qZY96glptuE',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                'images': [
                    base64Data
                ],
                'similar_images': true
            })
        })
            .then(response => response.json())
            .then(json => {
                if (func === 'identification') {
                    setIdentificationData(json);
                } else if (func === 'health_assessment') {
                    setDiagnosisData(json);
                }
            })
            .catch(error => console.error(error));
    }
    const result = identificationData ? identificationData["result"]["classification"]["suggestions"] : null;
    //const diagnosis = diagnosisData ? diagnosisData["result"]["disease"]["suggestions"] : null;
    const navigate = useNavigate();

    const handleDetailsClick = (param, access_token, func) => {
        checkTaskStatus(access_token)
            .then(data => {
                if (func == "identify") {
                    navigate('/details/', {
                        state: {
                            type: "Taxonomy",
                            name: data['result']['classification']['suggestions'][param]['name'],
                            img: data['result']['classification']['suggestions'][param]['similar_images'][0]['url'],
                            description: data['result']['classification']['suggestions'][param]['details']['description']['value'],
                            taxonomy: data['result']['classification']['suggestions'][param]['details']['taxonomy']
                        }
                    });
                } else {
                    navigate('/details/', {
                        state: {
                            type: "Treatment",
                            name: data['result']['disease']['suggestions'][param]['name'],
                            img: data['result']['disease']['suggestions'][param]['similar_images'][0]['url'],
                            description: data['result']['disease']['suggestions'][param]['details']['description'],
                            treatment: data['result']['disease']['suggestions'][param]['details']['treatment']
                        }
                    });
                }

            })
            .catch(error => {
                console.error("Failed to check task status");
            });
    };

    const checkTaskStatus = (access_token) => {
        return new Promise((resolve, reject) => {
            fetch('https://plant.id/api/v3/identification/' + access_token + '?details=common_names%2Curl%2Ctreatment%2Cdescription%2Ctaxonomy%2Crank%2Cgbif_id%2Cinaturalist_id%2Cimage%2Csynonyms%2Cedible_parts%2Cwatering%20&language=en',
                {
                    method: 'GET',
                    headers: {
                        'Api-Key': 'EYRBBKg1LlXbNxUt4gPNUieiMEDWKNbWl091p23qZY96glptuE',
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setDescriptionData(json);
                    resolve(json);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });

        });

    };
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
            {activeTab === 'tab1' && (
                <TabContent  >
                    {identificationData ? (
                        <>
                            {identificationData.result.classification.suggestions.map((item, index) => (
                                <Infocard
                                    key={index}
                                    plant={item.name}
                                    percent={convertToPercentage(item.probability)}
                                    img={item.similar_images[0].url}
                                    onDetailsClick={() => handleDetailsClick(index, identificationData['access_token'], "identify")}
                                />
                            ))}
                        </>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', alignContent: 'center' }}>
                            <span className="loading loading-spinner loading-lg" style={{ color: '#B4EF4C' }}></span>
                        </div>
                    )}
                </TabContent >)}
            {activeTab === 'tab2' && (
                <TabContent>
                    {!diagnosisData ? (
                        <div style={{ height: '100%', display: 'flex', alignContent: 'center' }}>
                            <span className="loading loading-spinner loading-lg" style={{ color: '#B4EF4C' }}></span>
                        </div>
                    ) : diagnosisData.result.disease.suggestions.length > 0 ? (
                        <>

                            {diagnosisData.result.disease.suggestions.map((item, index) => (
                                <Infocard
                                    key={index}
                                    plant={item.name}
                                    percent={convertToPercentage(item.probability)}
                                    img={(item.similar_images && item.similar_images.length > 0) ? item.similar_images[0].url : 'default-image-url'}
                                    onDetailsClick={() => handleDetailsClick(index, diagnosisData['access_token'], "diagnosis")}
                                />
                            ))}
                        </>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', alignContent: 'center' }}>
                            <img src={error}></img>
                        </div>
                    )}
                </TabContent>)}


        </>
    );
};

export default Tabs;
