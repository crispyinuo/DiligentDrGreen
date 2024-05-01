import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IdentifyDiagnosisBar from '../components/identifyDiagnosisBar';
import CameraBottomBar from '../components/cameraBottomBar';
import CameraTopBar from '../components/cameraTopBar';

function Camera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [photoData, setPhotoData] = useState(null);
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const fileInputRef = useRef(null);
    // Trigger file input
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    // Handle image file selection
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type.startsWith('image')) {
            setImage(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
                navigate('/confirm', { state: { photo: reader.result, type: activeButton } });
            };
            reader.readAsDataURL(selectedFile);
        } else {
            alert('Please select an image file.');
        }
    };

    useEffect(() => {
        const getVideo = () => {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    let video = videoRef.current;
                    if (video) {
                        video.srcObject = stream;
                        video.play().catch(err => {
                            console.error("Error attempting to play the video: ", err);
                        });
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
        let video = videoRef.current;
        // Fix for iOS Safari
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '')
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        // Set canvas size to the desired output size
        const outputWidth = video.clientWidth;
        const outputHeight = video.clientHeight;
        photo.width = outputWidth;
        photo.height = outputHeight;

        // Calculate the crop dimensions to maintain the aspect ratio of the canvas
        let sx, sy, sWidth, sHeight;
        const videoRatio = video.videoWidth / video.videoHeight;
        const outputRatio = outputWidth / outputHeight;

        if (videoRatio > outputRatio) {
            // Video is wider than desired aspect ratio
            sHeight = video.videoHeight;
            sWidth = sHeight * outputRatio;
            sx = (video.videoWidth - sWidth) / 2; // Center the crop horizontally
            sy = 0;
        } else {
            // Video is taller or equal in aspect ratio
            sWidth = video.videoWidth;
            sHeight = sWidth / outputRatio;
            sx = 0;
            sy = (video.videoHeight - sHeight) / 2; // Center the crop vertically
        }

        // Draw the cropped video to the canvas
        ctx.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, outputWidth, outputHeight);

        const photoDataUrl = photo.toDataURL("image/png");
        setPhotoData(photoDataUrl);
        navigate('/confirm', { state: { photo: photoDataUrl, type: activeButton } });
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
        setPhotoData(null);
    };
    const [activeButton, setActiveButton] = useState(1);  // State to track which button is active

    // Callback function to update the active button
    const handleActiveButtonChange = (buttonId) => {
        setActiveButton(buttonId);
    };
    return (
        <div className="camera">
            <CameraTopBar />
            <div className="content-container">
                <div className="photoContainer">
                    <video ref={videoRef} className="video-feed"></video>
                    <canvas ref={photoRef} style={{ display: 'none' }}></canvas>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        style={{ display: 'none', margin: '20px 0' }}
                    />
                </div>
                <div className="camera-identify-bar-container">
                    <IdentifyDiagnosisBar onActiveChange={handleActiveButtonChange} />
                </div>
            </div>
            <CameraBottomBar onTakePhoto={takePhoto} onImageUpload={triggerFileInput} />
        </div>
    );
}

export default Camera;
