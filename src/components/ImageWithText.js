import React from 'react';
import artExhibition from '../assets/art-exhibition.webp'

const ImageWithText = () => {
  return (
    <div className="image-with-text-container">
      <div className="text-image">
        <img src={artExhibition} alt="Your Image" className="art-loveimage" />
      </div>
      <div className="text-container">
        <p className='my-art-text'>Find Art You Love</p>
        <p className="text">“At Our Art Gallery, we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you’re looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, Saatchi Art is your portal to thousands of original works by today’s top artists.”</p>
      </div>
    </div>
  );
};

export default ImageWithText;
