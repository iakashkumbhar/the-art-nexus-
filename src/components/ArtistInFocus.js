// ArtistInFocus.js
import React from 'react';
import artist1 from '../assets/artist1.jpg'
import artist2 from '../assets/artist2.jpg'
import artist3 from '../assets/artist3.webp'
import artist4 from '../assets/artist4.jpg'
const ArtistInFocus = () => {

    const artists = [
        { id: 1, name: 'Artist 1', image: artist1 },
        { id: 2, name: 'Artist 2', image: artist2 },
        { id: 3, name: 'Artist 3', image: artist3 },
        { id: 4, name: 'Artist 3', image: artist4 },
    ];

    return (

        <div className='artist-in-focus-parent'>

            <p className='head-name'>Artist In Focus</p>

            <div className="artist-in-focus-container">
                {artists.map(artist => (
                    <div className="artist-in-focus" key={artist.id}>
                        <div className="artist-image-container">
                            <img src={artist.image} alt={artist.name} className="artist-image" />
                        </div>
                        <div className="artist-name">{artist.name}</div>
                    </div>
                ))}
            </div>


        </div>


    );
};

export default ArtistInFocus;
