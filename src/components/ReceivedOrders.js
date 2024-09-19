import React, { useEffect, useState } from 'react';

const ReceivedOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetchData(user.id);
        }
    }, []);

    const fetchData = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/order/get_order_by_artist/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
      }

    return (
        <div className="received-orders">
            <h2>Received Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Art Id</th>
                        <th>Amount</th>
                        <th>Payment Status</th>
                        <th>Payment Method</th>
                        <th>Customer Address</th>
                        <th>Ordered Date</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.art_id}</td>
                            <td>{item.amount}</td>
                            <td>{item.payment_status}</td>
                            <td>{item.payment_method}</td>
                            <td>{item.address}</td>
                            <td>{formatDate(item.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReceivedOrders;
