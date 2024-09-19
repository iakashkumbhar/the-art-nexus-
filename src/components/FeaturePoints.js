import React from 'react';
import { FaShippingFast, FaUserShield, FaHeadset, FaLock } from 'react-icons/fa';

const FeaturePoints = () => {
  return (
    <>
      <hr className="line" />
      <div className="feature-points">
        <div className="point">
          <FaShippingFast className="icon" />
          <span className='feat'>WORLDWIDE</span>
          <span>Shipping</span>
        </div>
        <div className="point">
          <FaUserShield className="icon" />
          <span className='feat'>TRUSTED</span>
          <span>Since 2007</span>
        </div>
        <div className="point">
          <FaHeadset className="icon" />
          <span className='feat'>SUPPORT 24/7 </span>
          <span>Dedicated support</span>
        </div>
        <div className="point">
          <FaLock className="icon" />
          <span className='feat'>100% SECURE CHECKOUT</span>
          <span>Buyer Protection & Security</span>
        </div>
      </div>

    </>
  );
};

export default FeaturePoints;
