import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <button onClick={() => onViewProduct(product)}>View Product</button>
    </div>
  );
};

export default ProductCard;
