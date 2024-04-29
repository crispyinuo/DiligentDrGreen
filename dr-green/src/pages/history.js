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
import { useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();
    const messages = [
        {
            id: 1, title: 'Andromeda polifolia', content: "Identification", date: '2024.3.5', description: 'Andromeda polifolia, common name bog-rosemary, is a species of flowering plant in the heath family Ericaceae, native to northern parts of the Northern Hemisphere. It is the only member of the genus Andromeda, and is only found in bogs in cold peat-accumulating areas. Andromeda glaucophylla is a synonym of A. polifolia var. latifolia.',
            img: image1, icon: identify_icon, taxonomy: { class: 'Magnoliopsida', genus: 'Andromeda', order: 'Ericales', family: 'Ericaceae', phylum: 'Tracheophyta' }
        },
        {
            id: 2, title: 'Water Deficiency', content: "Diagnosis", date: '2024.3.10', description: 'Water deficiency is similar in its symptoms to over-watering and it is important to identify the cause. Symptoms include slow growth, wilting, discolored leaves and flowers, burning on edges of leaves. The affected plant can also suffer from disrupted nutrient uptake.', img: image2, icon: diagnosis_icon,
            treatment: {
                biological: "For potted plants: if the soil is really dry, you may immerse the whole pot in water and wait until the soil absorbs the water.",
                chemical: "You may apply hydrogel for plants to the soil to increase water retention capacity.",
                prevention: "Mulch plants with a layer of organic mulch to reduce soil evaporation."
            }
        },
        {
            id: 3, title: "Cereus", content: "Identification", date: '2024.4.5', description: "Cereus ( \"serious\") is a genus of cacti (family Cactaceae) including around 33 species of large columnar cacti from South America. The name is derived from Greek (κηρός) and Latin words meaning \"wax\", \"torch\" or \"candle\". Cereus was one of the first cactus genera to be described; the circumscription varies depending on the authority. The term \"cereus\" is also sometimes used for a ceroid cactus, any cactus with a very elongated body, including columnar growth cacti and epiphytic cacti.",
            img: image3, icon: identify_icon, taxonomy: { class: 'Magnoliopsida', genus: 'Cereus', order: 'Caryophyllales', family: 'Cactaceae', phylum: 'Tracheophyta' }
        },
        {
            id: 4, title: "Animalia", content: "Diagnosis", date: '2024.4.10', description: "Disorders induced by organisms from the animal kingdom. These pests cause direct damage by feeding on leaves, stems, roots, and other parts of the plant or by inhabiting plant tissues. Pests can also spread bacterial and viral diseases.", img: image4, icon: diagnosis_icon,
            treatment: {
                biological: "Remove pests mechanically. Rub the pests off, or remove infested parts or use a strong stream of water to remove the insect.",
                chemical: "If necessary, apply insecticide, or acaricide.",
                prevention: "Encourage the presence of natural enemies (e.g. lady beetles, lacewings, parasitic wasps)."
            }
        }
    ];


    const goToDetailPage = (messageId) => {
        const messageIndex = messages.findIndex(message => message.id === messageId);

        if (messages[messageIndex]['content'] == "Identification") {
            navigate('/details/', {
                state: {
                    type: "Taxonomy",
                    name: messages[messageIndex]['title'],
                    img: messages[messageIndex]['img'],
                    description: messages[messageIndex]['description'],
                    taxonomy: messages[messageIndex]['taxonomy']
                }
            });
        } else {
            navigate('/details/', {
                state: {
                    type: "Treatment",
                    name: messages[messageIndex]['title'],
                    img: messages[messageIndex]['img'],
                    description: messages[messageIndex]['description'],
                    treatment: messages[messageIndex]['treatment']
                }
            });
        }

    }
    const truncateText = (text, limit) => {
        const shortened = text.slice(0, limit).trim();
        if (text.length > limit) {
            return `${shortened}...`;
        }
        return shortened;
    };

    return (
        <PageContainer>
            <DrMessage />
            {messages.map((message) => (
                <ChatBubble key={message.id} onClick={() => goToDetailPage(message.id)}>
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
                        <Description>{truncateText(message.description, 60)}</Description>
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
