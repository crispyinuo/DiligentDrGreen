import React, { useState } from 'react';

import styled from 'styled-components';


const Infocard = (props) => {

    return (

        <div className="card bg-base-100 shadow-xl" style={{ flex: "1", minWidth: '150px' }}>
            <figure   >
                <img src={props.img} alt="Shoes" className="rounded-xl" />
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
