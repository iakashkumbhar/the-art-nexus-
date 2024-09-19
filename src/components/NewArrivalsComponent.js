// NewArrivalsComponent.js
import React, { useEffect, useState } from 'react';
import new1 from '../assets/new1.webp'
import new8 from '../assets/new8.webp'
import new3 from '../assets/new3.jpeg'
import new4 from '../assets/new4.jpeg'
import new5 from '../assets/new5.jpeg'
import new6 from '../assets/new6.jpeg'
import new7 from '../assets/new7.jpeg'
import new2 from '../assets/new2.jpg'
import { Link, redirect } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

const NewArrivalsComponent = ({ title }) => {

    // const items = [
    //     { id: 1, name: 'Royal Majesty Framed Canvas Print', imageUrl: new1, price: 1000 },
    //     { id: 2, name: 'Vasl Wood Yellow Canvas Painting ', imageUrl: new2, price: 2000 },
    //     { id: 3, name: 'Modern Art Wall Decor Paintings', imageUrl: new3, price: 3000 },
    //     { id: 4, name: 'Floral Wall Art Canvas Print', imageUrl: new4, price: 3000 },
    //     { id: 5, name: 'Krishna Painting Playing Flute', imageUrl: new5, price: 2500 },
    //     { id: 6, name: 'Divine Ganpati Wall Canvas Art', imageUrl: new6, price: 2590 },
    //     { id: 7, name: 'Peacock Design canvas wall Art', imageUrl: new7, price: 4520 },
    //     { id: 8, name: 'Divine Art Wall Decor Paintings', imageUrl: new8, price: 7620 },
    // ];

    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState([]);
    const [isArtist, setIsArtist] = useState(false);

    useEffect(() => {
        // Retrieve user details from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsArtist(user.is_artist); // Set isArtist state based on user details
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/art');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setItems(data); // Assuming your API response is an array of items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const buyArt = async (art_id) => {
        let payload = {
            "product_id": art_id,
            "customer_id": user.id,
            "product_quantity": 1
        }

        console.log('payload-------->', payload)
        const response = await fetch('http://127.0.0.1:8000/order/payment', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to application/json
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }

        const data = await response.json();
        window.open(data.checkout_url)
    }

    return (
        <div className="new-arrivals">
            {title && <p className='head-name'>{title}</p>}

            <div className='new-arrivals-div'>
                {items.length === 0 ? (<p className='data-not-found'>Data Not Found</p>) : (items.map((item, index) => (
                    <div className="card" key={item?.id}>
                        <Link to={`/artDetail/${item?.id}`}>
                            <img
                                src={"data:image/png;base64," + item?.image_data}
                                // src={item?.imageUrl}
                                alt={item?.name}
                                className="card-image"
                            />
                        </Link>
                        <div className="card-details">
                            <p className="card-name">{item?.name}</p>
                            <p className="card-price">${item?.price}</p>
                            <button className="buy" onClick={() => buyArt(item?.id)}>Buy Now</button>
                        </div>
                    </div>
                )))}

            </div>
        </div>
    );
}

export default NewArrivalsComponent;