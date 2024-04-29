import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CameraTopBar from '../components/cameraTopBar';
import ConfirmBottomBar from '../components/confirmBottomBar';

function ConfirmPhoto() {
    const navigate = useNavigate();
    const location = useLocation();
    const { photo, type } = location.state;


    const handleConfirm = () => {
        // Process the photo (store or send to API)
        console.log("Photo confirmed:", photo);
        // For now, just download it
        const link = document.createElement("a");
        link.href = photo;
        link.download = "confirmed_photo.png";
        link.click();
        navigate('/identify', { state: { photo: photo, type: type } })
    };

    const handleRetake = () => {
        navigate('/camera');
    };

    return (
        <div className="confirm">
            <CameraTopBar />
            <div className="content-container">
                <div className="photoContainer">
                    <img src={photo} alt="Captured" />
                </div>
            </div>
            <ConfirmBottomBar onConfirmClick={handleConfirm} onRetakeClick={handleRetake} />
        </div>
    );
}

export default ConfirmPhoto;
