import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailComponent = ({ items }) => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

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
    <div className="detail-container">
      <img src={"data:image/png;base64," + item?.image_data} alt={item?.name} className="detail-image" />
      <div className="detail-info">
        <h2 className="detail-name">{item?.name}</h2>
        <p className="detail-description">{item?.description}</p>
        <div className="detail-artist">
          <p><strong>Artist:</strong> {item?.artist_name}</p>
          <p><strong>Price:</strong> Rs. {item?.price}</p>
          <button className='buy-now' onClick={() => buyArt(item?.id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
