import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import LandingPage from './page/LandingPage';
import DetailComponent from './components/DetailComponent';

import new1 from '../src/assets/new1.webp';
import new2 from '../src/assets/new2.jpg';
import new3 from '../src/assets/new3.jpeg';
import new4 from '../src/assets/new4.jpeg';
import new5 from '../src/assets/new5.jpeg';
import new6 from '../src/assets/new6.jpeg';
import new7 from '../src/assets/new7.jpeg';
import new8 from '../src/assets/new8.webp';
import UploadArtForm from './components/UploadArtForm';
import AboutPage from './components/AboutPage';
import Shop from './page/Shop';
import ExplorePage from './page/ExplorePage';
import ArtistDashboard from './components/ArtistDashboard';
import YourOrders from './components/YourOrders';
import ReceivedOrders from './components/ReceivedOrders';
import SuccessPage from './components/SuccessPage';


function App() {

//   const items = [
//     { id: 1, name: 'Royal Majesty Framed Canvas Print', artist: "AshishKumar Yadav", imageUrl: new1, price: 1000, description: "Add some vitality and vibrancy to your home with our Royal Majesty Canvas Print. A beautiful and majestic elephant stands in the centre, with vibrant colours in the backdrop. This composition is truly fit for a king or queen. The canvas is stretched on a golden frame and the painting comes ready to hang. It will make a great addition to any home or office, and would also make a perfect gift. Buy now and add some colour and life to your space. " },
//     { id: 2, name: 'Vasl Wood Yellow Canvas Painting ', artist: "AkashKumar Kumbhar", imageUrl: new2, price: 2000 },
//     { id: 3, name: 'Modern Art Wall Decor Paintings', artist: "Myuri Patil", imageUrl: new3, price: 3000 },
//     { id: 4, name: 'Floral Wall Art Canvas Print', artist: "Suryabanshi Shobha", imageUrl: new4, price: 3000, description: "Transform Your Walls with Stunning Wall Art and Paintings. Enhance the beauty and allure of your living room, bedroom, or any space in your home with our exquisite collection of wall art and paintings. Whether you seek a captivating focal point or subtle accents, our carefully curated selection offers a diverse range of styles to suit your taste and complement your existing decor. Our wall paintings for living room decoration are created by talented artists who pour their passion and creativity into each brushstroke." },
//     { id: 5, name: 'Krishna Painting Playing Flute', artist: "Prakash Singh", imageUrl: new5, price: 2500, description: "Seven Colors Home Decor is a brand that specializes in creating beautiful, high-quality home decor items that are designed to make your home look and feel its best. We offer a wide range of products, including Paintings, Canvas paintings, Handmade paintings, office wall decors. 3D Decors, Madhubnai paintings, Abstract wall art, Modern Wall arts, wall decor products, Home Decoration Products, Neon's, 3D Motivation Quotes Letters, Neon's, Ancient Vedic Sanskrit Decorative, Running horses paintings, Vaastu Running Horses Paintings, Radha Krishna Paintings, Buddha Paintings etc."  },
//     { id: 6, name: 'Divine Ganpati Wall Canvas Art', imageUrl: new6, price: 2590 },
//     { id: 7, name: 'Peacock Design canvas wall Art', imageUrl: new7, price: 4520 },
//     { id: 8, name: 'Divine Art Wall Decor Paintings', imageUrl: new8, price: 7620 },
// ];

//this is App.js

const [items, setItems] = useState([]);

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


const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/artDetail/:id" element={<DetailComponent items={items} addToCart={addToCart} />} />
          <Route path="/uploadArt" element={<UploadArtForm />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/artist-dashboards" element={<ArtistDashboard />} />
          <Route path="/received-orders" element={<ReceivedOrders />} />
          <Route path="/your-orders" element={<YourOrders />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
