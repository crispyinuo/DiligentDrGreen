import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IdentifyDiagnosisBar from '../components/identifyDiagnosisBar';
import CameraBottomBar from '../components/cameraBottomBar';
import CameraTopBar from '../components/cameraTopBar';

function Camera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photoData, setPhotoData] = useState(null);
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        const getVideo = () => {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    let video = videoRef.current;
                    if (video) {
                        video.srcObject = stream;
                        video.play();
                    }
                })
                .catch(err => {
                    console.error("Error accessing the camera:", err);
                });
        };

        getVideo();

        return () => {
            if (isNavigating) closeCamera();
        };
    }, [isNavigating]); // Trigger cleanup when isNavigating changes

    const takePhoto = () => {
        const width = 640;
        const height = 480;
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        if (width && height) {
            photo.width = width;
            photo.height = height;
            ctx.drawImage(video, 0, 0, width, height);
            const photoDataUrl = photo.toDataURL("image/png");
            setPhotoData(photoDataUrl);
            navigate('/confirm', { state: { photo: photoDataUrl } });
        }
    };

    const downloadPhoto = () => {
        const photo = photoRef.current;
        const url = photo.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "photo.png"; // Set the file name for download
        link.click();
    };

    const closeCamera = () => {
        let video = videoRef.current;
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        setHasPhoto(false);
    };
    return (
        <div className="camera">
            <CameraTopBar />
            <video ref={videoRef} className="video-feed"></video>
            {/* <h1>Welcome to the Camera Page</h1> */}
            <div className="content-container">
                <div className="camera-identify-bar-container">
                    <IdentifyDiagnosisBar />
                </div>
                <canvas ref={photoRef} style={{ display: hasPhoto ? 'block' : 'none' }}></canvas>
                <CameraBottomBar onTakePhoto={takePhoto} />
            </div>
        </div>
    );
}

export default Camera;
