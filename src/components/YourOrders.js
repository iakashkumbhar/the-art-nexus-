// NewArrivalsComponent.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import thank from '../assets/thanks.jpg'

const YourOrders = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Retrieve user details from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
        }
    }, []);

    useEffect(() => {
        if(user){
            console.log('user-------------->', user)
            fetchData(user.id);
        }   
    }, []);

    const fetchData = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/user/${id}/orders`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="new-arrivals">
            <p className='head-name'>Your Orders</p>

            <div className='new-arrivals-div'>
                {items.length === 0 ?
                    (<p className='data-not-found'>No Orders Found</p>) :

                    (items.map((item, index) => (
                        <div className="card" key={item?.id}>
                            <Link to={`/artDetail/${item?.id}`}>
                                <img
                                    src={thank}
                                    alt={item?.name}
                                    className="card-image"
                                />
                            </Link>
                            <div className="card-details">
                                <p className="card-name">{item?.art_name}</p>
                                <p className="card-price">Amound Paid : ${item?.amount}</p>
                                <p className="card-price">Payment status: {item?.payment_status}</p>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    );
}

export default YourOrders;