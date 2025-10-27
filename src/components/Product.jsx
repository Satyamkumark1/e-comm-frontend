import React from 'react';
import LoadingIcons from 'react-loading-icons'
import ProductCard from './ProductCard';
import { FaExclamationTriangle } from 'react-icons/fa';

const Product = () => {
    const isLoading = false;
    const errorMessage = false;
    const products = [
      {
        productId: "SKU_001",
        productName: "Classic Cotton T-Shirt",
        brand: "ComfortWear",
        category: "Apparel",
        price: 24.99,
        quantity : 50,
        image:  "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw27d78285/content/seasonal-content/homepage/2025/10/01/images/hero-winter_sunrise-d.jpg",
        description : "cedced"
      },
     {
        productId: "SKU_001",
        productName: "Classic Cotton T-Shirt",
        brand: "ComfortWear",
        category: "Apparel",
        price: 24.99,
        quantity : 50,
        image:  "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw27d78285/content/seasonal-content/homepage/2025/10/01/images/hero-winter_sunrise-d.jpg",
        description : "cedced"
      },
      
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <LoadingIcons.SpinningCircles className="w-12 h-12 text-blue-500" />
                    <p className="ml-4 text-lg text-gray-700">Loading...</p>
                </div>
            ) : errorMessage ? (
                <div className="flex flex-col items-center justify-center h-64 text-red-600">
                    <FaExclamationTriangle className="w-10 h-10 mb-2" />
                    <p className="text-lg font-semibold">Error loading products</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {products &&
                        products.map((item, i) => (
                            <ProductCard key={i} {...item} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Product;