import * as React from 'react';
import styled from 'styled-components';
import image4 from '../images/history_image 4.png';
import time_icon from '../icons/Time.png';
import avatar1 from '../images/Avatar1.png'
import tag_icon from '../icons/Tag.png'
import cactus_post from '../images/Cactus_post.png'
import like from '../icons/Like.png'
import comment from '../icons/Comment.png'
import share_post from '../icons/Share_post.png'
const Head = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Interaction = styled.div`
    display:flex;
    align-items: center;
    gap: 8px;
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
 
  
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  
`;
const Description = styled.div`
  color: black;
  font-size: 12px;
  paddingTop: 12px;
`;
const ChatBubble = styled.div`
  background-color: white;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  width: 90%;  /* Responsive width */
  gap: 15px;
  display: flex;
  flex-direction: column;
`;
function Post(props) {

    return (
        <ChatBubble >
            <Head>
                <div class="avatar">
                    <div class="w-20 rounded-full">
                        <img src={props.avatar} />
                    </div>
                </div>
                <MessageContent>
                    <Title>{props.name}</Title>
                    <div style={{ display: "flex", gap: "4px" }}>
                        <div className="badge badge-ghost badge-sm" style={{ backgroundColor: "#F6F6F6", border: "none" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <img src={tag_icon} style={{ width: "12px", height: "12px" }} />
                                <div style={{ color: "#A9A9A9", fontSize: "10px" }}>{props.tag}</div>
                            </div>
                        </div>
                        <div className="badge badge-ghost badge-sm" style={{ backgroundColor: "#F6F6F6", border: "none" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <img src={time_icon} style={{ width: "12px", height: "12px" }} />
                                <div style={{ color: "#A9A9A9", fontSize: "10px" }}>2024.04.28</div>
                            </div>
                        </div>
                    </div>
                </MessageContent>
            </Head>
            <Description>{props.content}</Description>
            <img src={props.img} style={{ height: 'auto', width: '95%', alignSelf: 'center' }} />
            <Interaction>
                <img src={like} style={{ width: "20px", height: "20px" }}></img>
                {props.like}
                <img src={comment} style={{ width: "20px", height: "20px" }}></img>
                {props.comment}
                <img src={share_post} style={{ width: "20px", height: "20px" }}></img>
            </Interaction>
        </ChatBubble>
    );
}
export default Post;