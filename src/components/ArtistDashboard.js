// NewArrivalsComponent.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

const ArtistDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState([]);
    const [isArtist, setIsArtist] = useState(false);

    useEffect(() => {
        if (user) {
            console.log('this is useeffect')
            fetchData(user?.id);
            setIsArtist(user.is_artist); // Set isArtist state based on user details
        }
    }, []);

    const fetchData = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/art-by-artist-id/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setItems(data); // Assuming your API response is an array of items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/art/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            if (response.ok) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="new-arrivals">
            <p className='head-name'>Dashboard</p>

            <div className='new-arrivals-div'>
                {items.length === 0 ? (
                    <p className='data-not-found'>No data found</p>
                ) : (
                    items.map((item, index) => (
                        <div className="card" key={item?.id}>
                            <Link to={`/artDetail/${item?.id}`}>
                                <img
                                    src={"data:image/png;base64," + item?.image_data}
                                    alt={item?.name}
                                    className="card-image"
                                />
                            </Link>
                            <div className="card-details">
                                <p className="card-name">{item?.name}</p>
                                <p className="card-price">Rs. {item?.price}</p>
                                <div className="buy-delete-div">
                                    {isArtist && (
                                        <FiTrash2
                                            className="delete-icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(item.id);
                                            }}
                                            style={{ color: 'red' }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default ArtistDashboard;