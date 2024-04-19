import React from 'react';
import IdentifyDiagnosisBar from '../components/identifyDiagnosisBar';
import '../style.css';

function Camera() {
    return (
        <div className="camera">
            <h1>Welcome to the Camera Page</h1>
            <div className="nav-bar-container">
                <IdentifyDiagnosisBar />
            </div>
        </div>
    );
}

export default Camera;
