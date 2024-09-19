// LandingPage.js
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import NewArrivalsComponent from '../components/NewArrivalsComponent';
import ArtistInFocus from '../components/ArtistInFocus';
import FeaturePoints from '../components/FeaturePoints';
import ShopByCategory from '../components/ShopByCategory';
import ImageWithText from '../components/ImageWithText';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <CarouselComponent />
      <NewArrivalsComponent title="This is new arrivals" />
      <ShopByCategory/>
      <ArtistInFocus/>
      <ImageWithText/>
      <FeaturePoints/>
    </div>
  );
}

export default LandingPage;
