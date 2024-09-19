import React from 'react';

const SuccessPage = () => {
  return (
    <div className="success-page"> {/* Apply CSS class here */}
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <p>Continue shopping <a href="/">here</a>.</p>
    </div>
  );
}

export default SuccessPage;
