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
  min-height: 550px;
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
    //console.log(realimageURL.photo);
    const fetchIdentificationData = () => {

        const imageURL = 'https://media.istockphoto.com/id/483451251/photo/fungal-attack.jpg?s=612x612&w=0&k=20&c=PM0Lld99Io4DU6sRqemkytZUkuSF5effOJ8fhIAXwVo=';
        fetch(imageURL) // URL of your image
            .then(response => response.blob()) // Convert the response to a Blob
            .then(blob => {
                // Convert Blob to Base64
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                    console.log('called: ', reader)
                    //const base64data = reader.result;
                    const base64data = realimageURL.photo;
                    //console.log(base64data)
                    //setBase64Image(base64data);
                    uploadImage(base64data, 'identification'); // Call upload function
                };
            })
            .catch(error => console.error('Error loading image:', error));
    }; // Empty dependency array means this effect runs once on mount

    const fetchDiagnosisData = () => {
        const imageURL = 'https://media.istockphoto.com/id/483451251/photo/fungal-attack.jpg?s=612x612&w=0&k=20&c=PM0Lld99Io4DU6sRqemkytZUkuSF5effOJ8fhIAXwVo=';
        fetch(imageURL) // URL of your image
            .then(response => response.blob()) // Convert the response to a Blob
            .then(blob => {
                // Convert Blob to Base64
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                    //console.log('called: ', reader)
                    //const base64data = reader.result;
                    const base64data = realimageURL.photo;
                    //console.log(base64data)
                    //setBase64Image(base64data);
                    uploadImage(base64data, 'health_assessment'); // Call upload function
                };
            })
            .catch(error => console.error('Error loading image:', error));
    }
    useEffect(() => {
        if (activeTab === 'tab1' && !identificationData) {
            fetchIdentificationData();
        } else if (activeTab === 'tab2' && !diagnosisData) {
            fetchDiagnosisData();
        }
    }, [activeTab, identificationData, diagnosisData]);

    function uploadImage(base64Data, func) {
        //console.log(base64Data)
        fetch('https://plant.id/api/v3/' + func, {
            method: 'POST',
            headers: {
                'Api-Key': '3pOUVUg98j40Ln3Yh1LdUhsdXwJck7rLgCvVbpiXZeN2rIhrIL',
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
    const diagnosis = diagnosisData ? diagnosisData["result"]["disease"]["suggestions"] : null;
    // console.log(diagnosis);
    // console.log(result);
    //console.log(identificationData['access_token'])
    //const history = useHistory();  // Get access to the history instance
    const navigate = useNavigate();

    const handleDetailsClick = (param, access_token, func) => {
        // console.log("Parameter passed to function:", param);
        // console.log(result);
        // console.log(access_token);
        checkTaskStatus(access_token)
            .then(data => {
                //console.log(data);
                //console.log(descriptionData);
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
        //console.log(descriptionData)
        //navigate('/details/', { state: { name: descriptionData['result']['classification']['suggestions'][0]['name'], img: result[0]['similar_images'][0]['url'] } });

        // Perform any action here such as navigating to another page or opening a modal
    };
    //console.log(result);
    const checkTaskStatus = (access_token) => {
        //if (!taskId) return;  // Ensure there is a taskId set
        //console.log(access_token);
        return new Promise((resolve, reject) => {
            fetch('https://plant.id/api/v3/identification/' + access_token + '?details=common_names%2Curl%2Ctreatment%2Cdescription%2Ctaxonomy%2Crank%2Cgbif_id%2Cinaturalist_id%2Cimage%2Csynonyms%2Cedible_parts%2Cwatering%20&language=en',
                {
                    method: 'GET',
                    headers: {
                        'Api-Key': '3pOUVUg98j40Ln3Yh1LdUhsdXwJck7rLgCvVbpiXZeN2rIhrIL',
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
                        <div style={{ justifySelf: 'center' }}>
                            <span className="loading loading-spinner loading-lg" style={{ color: '#B4EF4C' }}></span>
                        </div>
                    )}
                </TabContent >)}
            {activeTab === 'tab2' && (
                <TabContent>
                    {diagnosis && diagnosis.length > 0 ? (
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
