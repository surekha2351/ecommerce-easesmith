import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage = () => {
  const location = useLocation();
  const { productName } = location.state || {};

  return (
    <div className="thank-you-page">
      <h1>Thank you for your interest in {productName}!</h1>
    </div>
  );
};

export default ThankYouPage;
