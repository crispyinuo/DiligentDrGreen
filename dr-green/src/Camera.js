import React, { useRef, useEffect, useState } from 'react';

function Camera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);

    // Enable camera function
    useEffect(() => {
        getVideo();
    }, [videoRef]);

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

    // take Photo function
    const takePhoto = () => {
        const width = 640; // Set  width
        const height = 480; // Set  height
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        if (width && height) {
        
            photo.width = width;
            photo.height = height;
            ctx.drawImage(video, 0, 0, width, height);

            setHasPhoto(true);
        }
    };

    // Reset camera 
    const closeCamera = () => {
        let video = videoRef.current;
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        setHasPhoto(false);
    };

    return (
        <div className="camera">
            <video ref={videoRef}></video>
            <button onClick={takePhoto}>Take Photo</button>
            <button onClick={closeCamera}>Close Camera</button>
            {hasPhoto && (
                <canvas ref={photoRef}></canvas>
            )}
        </div>
    );
}

export default Camera;
