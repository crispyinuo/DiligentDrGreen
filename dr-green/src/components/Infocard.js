import React, { useState } from 'react';
import bookmark_active from "../icons/Bookmark_green.png"
import bookmark_inactive from "../icons/Bookmark.png"
import share from "../icons/share.png"

import styled from 'styled-components';


const Infocard = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked); // Toggle the bookmark state
    };
    return (

        <div className="card bg-base-100 shadow-xl" style={{ flex: "1", minWidth: '150px' }}>
            <figure style={{ position: 'relative' }}  >
                <img src={props.img} alt="Shoes" className="rounded-xl" />
                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px' }}>
                    {/* Replace 'Icon1' and 'Icon2' with your actual icon components or img tags */}
                    <img src={share} alt="Icon 1" style={{ width: '24px', height: '24px' }} />
                    {isBookmarked ? (
                        <img src={bookmark_active} alt="Bookmarked" style={{ width: '24px', height: '24px' }} onClick={handleBookmarkClick} />
                    ) : (
                        <img src={bookmark_inactive} alt="Unbookmarked" style={{ width: '24px', height: '24px' }} onClick={handleBookmarkClick} />
                    )}
                </div>
            </figure>
            <div className="card-body items-left text-left" style={{ display: "flex", flexDirection: "row", padding: '10px', gap: '8px', justifyContent: 'space-between' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>{props.plant}</p>
                    <h2 className="card-title">{props.percent}</h2>
                </div>
                <div className="card-actions" >
                    <button className="btn btn-primary" style={{ backgroundColor: '#B4EF4C', color: 'black', border: '0px' }} onClick={props.onDetailsClick}>Details</button>
                </div>
            </div>
        </div>

    );
};

export default Infocard;
