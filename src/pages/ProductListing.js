import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';

// Mock Data: You would place the mock data here
const mockProducts = [
  { id: 1, name: 'Monstera', price: 299, image: '/images/monstera.jpg' },
  { id: 2, name: 'Snake Plant', price: 359, image: '/images/snake-plant.jpg' },
  { id: 3, name: 'Aloe Vera', price: 150, image: '/images/aloe-vera.jpg' },
  { id: 4, name: 'Spider Plant', price: 199, image: '/images/spider-plant.jpg' },
  { id: 5, name: 'ZZ Plant', price: 250, image: '/images/zz-plant.jpg' },
  { id: 6, name: 'Succulent', price: 100, image: '/images/succulent.jpg' },
  { id: 7, name: 'Jade Plant', price: 180, image: '/images/jade-plant.jpg' },
  { id: 8, name: 'Fiddle Leaf Fig', price: 399, image: '/images/fiddle-leaf-fig.jpg' },
  // Add more products as needed
];

const ProductListing = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setCartModalOpen(true);
  };

  const closeModal = () => setCartModalOpen(false);

  // Paginate the mock products
  const paginatedProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-listing">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(mockProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      {selectedProduct && (
        <AddToCartModal
          isOpen={cartModalOpen}
          onRequestClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductListing;
