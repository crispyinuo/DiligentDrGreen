import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  // Handle image file selection
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image')) {
      setImage(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // Generate a preview URL
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please select an image file.');
    }
  };

  // Handle image upload logic
  const handleUpload = () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

   
    console.log('Image ready for upload:', image);

    
    setTimeout(() => {
      alert('Image uploaded successfully!');
      setImage(null);
      setPreviewUrl('');
    }, 1500);
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*"
        onChange={handleImageChange} 
        style={{ display: 'block', margin: '20px 0' }}
      />
      {previewUrl && (
        <>
          <p>Image Preview:</p>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </>
      )}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUploader;
