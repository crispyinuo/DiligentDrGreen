import React from 'react';
import IdentifyDiagnosisBar from '../components/identifyDiagnosisBar';
import CameraBottomBar from '../components/cameraBottomBar';
import '../style.css';

function Camera() {
    return (
        <div className="camera">
            <h1>Welcome to the Camera Page</h1>
            <div className="content-container">
                <div className="camera-identify-bar-container ">
                    <IdentifyDiagnosisBar />
                </div>
                <CameraBottomBar />
            </div>
        </div>
    );
}

export default Camera;
