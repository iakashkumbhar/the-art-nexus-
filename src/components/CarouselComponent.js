// CarouselComponent.js
import React from 'react';
import art1 from '../assets/art1.jpg';
import art3 from '../assets/art3.jpg';
import art9 from '../assets/art9.jpg';
import art10 from '../assets/art10.png';
import art11 from '../assets/art11.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles


const CarouselComponent = () => {

    const images = [art1, art9];

    return (
        <div className="carousel-container">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className='carousel-img'/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;