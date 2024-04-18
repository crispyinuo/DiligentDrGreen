import * as React from "react";

function GroupCard({ imageSrc, groupName }) {
    return (
        <div class="card w-48 bg-base-100 shadow-xl">
            <figure>
                <img src={imageSrc} alt={groupName} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{groupName}</h2>
            </div>
        </div>
    );
}

export default GroupCard;


