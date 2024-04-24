import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import IdentifyDiagnosisBar from '../components/identifyDiagnosisBar';
import CameraTopBar from '../components/cameraTopBar';

function ConfirmPhoto() {
    const navigate = useNavigate();
    const location = useLocation();
    const { photo } = location.state;

    const handleConfirm = () => {
        // Process the photo (store or send to API)
        console.log("Photo confirmed:", photo);
        // For now, just download it
        const link = document.createElement("a");
        link.href = photo;
        link.download = "confirmed_photo.png";
        link.click();
    };

    const handleRetake = () => {
        navigate('/');
    };

    return (
        <div>
            <CameraTopBar />
            <div className="content-container">
                <div className="camera-identify-bar-container">
                    <IdentifyDiagnosisBar />
                </div>
            </div>
            <img src={photo} alt="Captured" style={{ maxWidth: '100%' }} />
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleRetake}>Retake</button>
        </div>
    );
}

export default ConfirmPhoto;
