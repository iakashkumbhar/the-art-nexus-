// UploadArtForm.js
import React, { useState } from 'react';

const UploadArtForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    price: ''
  });

  const user = JSON.parse(localStorage.getItem('user'));

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extracting values from formData and converting them to strings
    const { image, name, description } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append('image_data', image);
    formDataToSend.append('name', name.trim()); // Trim any leading or trailing whitespace
    formDataToSend.append('description', description.trim()); // Trim any leading or trailing whitespace
    formDataToSend.append('price', formData.price);
    formDataToSend.append('artist', user.id); // Trim any leading or trailing whitespace

    console.log('formDataToSend:', formDataToSend);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/art', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      const data = await response.json();

      alert(data.message);
      if (window.confirm('Do you want to clear the form?')) {
        setFormData({
          image: null,
          name: '',
          description: '',
          price: '',
        });
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
      console.error('Error fetching data:', error);
    }
  };




  return (
    <div className="upload-art-form-container">
      <h2>Upload Your Art</h2>
      <form className="upload-art-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        {/* <div className="form-group">
            <label htmlFor="artistName">Artist Name:</label>
            <input type="text" id="artistName" name="artistName" value={formData.artistName} onChange={handleChange} required />
          </div> */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadArtForm;
