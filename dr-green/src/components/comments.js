import * as React from "react";
import time_icon from '../icons/Time.png';
import styled from 'styled-components';
import like from '../icons/Like.png';
import comment from '../icons/Comment.png';
import avatar7 from '../images/Avatar7.png';

const Interaction = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

function Comments({
    avatar = avatar7,
    name = "Emily Moore",
    likeCount = '5',
    commentCount = '0',
    time = "2024.04.28",
    content = "Congrats on the new addition! For barrel cacti, a mix of 50% potting soil and 50% sand works great. Stick to a pot just bigger than the cactus for best growth."
}) {
    return (
        <div className="flex gap-1 pt-4">
            <div className="avatar pl-6">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                    <img src={avatar} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
            <div className="flex flex-col justify-center px-5">
                <div className="flex gap-1 justify-between w-full">
                    <div className="flex flex-col justify-center tracking-tight">
                        <div className="text-xs text-black">{name}</div>
                        <div className="badge badge-ghost badge-sm" style={{ backgroundColor: "#F6F6F6", border: "none" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <img src={time_icon} style={{ width: "12px", height: "12px" }} />
                                <div style={{ color: "#A9A9A9", fontSize: "10px" }}>{time}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3.5 justify-between self-start text-xs tracking-tight whitespace-nowrap text-neutral-400">
                        <Interaction>
                            <img src={like} style={{ width: "20px", height: "20px" }} alt="Like"></img>
                            {likeCount}
                            <img src={comment} style={{ width: "20px", height: "20px" }} alt="Comment"></img>
                            {commentCount}
                        </Interaction>
                    </div>
                </div>
                <div className="mt-1 text-xs tracking-tight leading-4 text-black">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Comments;
