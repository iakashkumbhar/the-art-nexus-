import React from 'react';
import explore1 from '../assets/new2.jpg';
import explore2 from '../assets/new3.jpeg';
import explore3 from '../assets/new4.jpeg';
import explore4 from '../assets/new5.jpeg';
import explore5 from '../assets/new6.jpeg';
import explore6 from '../assets/new7.jpeg';
import explore7 from '../assets/new4.jpeg';
import explore8 from '../assets/new5.jpeg';

const ExplorePage = () => {
    // Sample data for artwork
    const artworks = [
        { id: 1, title: "Artwork 1", imageUrl: explore1, artist: "Artist 1", description: "Description 1" },
        { id: 2, title: "Artwork 2", imageUrl: explore2, artist: "Artist 2", description: "Description 2" },
        { id: 3, title: "Artwork 3", imageUrl: explore3, artist: "Artist 3", description: "Description 3" },
        { id: 4, title: "Artwork 3", imageUrl: explore4, artist: "Artist 3", description: "Description 3" },
        { id: 5, title: "Artwork 3", imageUrl: explore5, artist: "Artist 3", description: "Description 3" },
        { id: 6, title: "Artwork 3", imageUrl: explore6, artist: "Artist 3", description: "Description 3" },
        { id: 7, title: "Artwork 3", imageUrl: explore7, artist: "Artist 3", description: "Description 3" },
        { id: 8, title: "Artwork 3", imageUrl: explore8, artist: "Artist 3", description: "Description 3" },
        { id: 8, title: "Artwork 3", imageUrl: explore2, artist: "Artist 3", description: "Description 3" },
    ]
    return (
        <div className='explore-parent'>
            <p className='head-name'>Explore More</p>
            <div className="explore-container">
                {artworks.map((artwork) => (
                    <div className="artwork-item" key={artwork.id}>
                        <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
                        <div className="artwork-details">
                            <h2 className="artwork-title">{artwork.title}</h2>
                            <p className="artwork-artist">{artwork.artist}</p>
                            <p className="artwork-description">{artwork.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;
