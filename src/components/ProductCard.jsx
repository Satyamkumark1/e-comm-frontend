import React, { useState } from "react";
const ProductCard = ({
    productId,
    productName,
    brand,
    category,
    price,
    image,
    description,
    quantity,
}) => {
    const [openProductViewModal, setopenProductViewModal] = useState(false);
    const [selectedViewProduct, setselectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;

    const handleViewDetails = (product) => {
        setselectedViewProduct(product);
        setopenProductViewModal(true);
    };

    const handleAddToCart = () => {
       
        alert(`Added "${productName}" to cart!`);
    };

    const handleBuyNow = () => {
        // Buy now logic here
        alert(`Proceeding to buy "${productName}"!`);
    };

    return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow hover:shadow-2xl bg-white">
        <div
            onClick={() =>
                handleViewDetails({
                    productId,
                    productName,
                    brand,
                    category,
                    price,
                    image,
                    description,
                    quantity,
                })
            }
            className="w-full overflow-hidden aspect-3/2 cursor-pointer"
        >
            <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src={image}
                alt={productName}
            />
        </div>
        <div className="p-4">
            <h2
                onClick={() =>
                    handleViewDetails({
                        productId,
                        productName,
                        brand,
                        category,
                        price,
                        image,
                        description,
                        quantity,
                    })
                }
                className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600"
            >
                {productName}
            </h2>
            <p className="text-sm text-gray-500 mb-1">
                {brand} &middot; {category}
            </p>
            <p className="text-base font-bold mb-2">&#8377;{price}</p>
            <p className="text-sm text-gray-700 mb-2">{description}</p>
            <span
                className={`text-xs font-medium ${
                    isAvailable ? "text-green-600" : "text-red-600"
                }`}
            >
                {isAvailable ? "In Stock" : "Out of Stock"}
            </span>
            <div className="mt-4 flex gap-2">
                <button
                    onClick={handleAddToCart}
                    disabled={!isAvailable}
                    className={`px-4 py-2 rounded bg-yellow-500 text-white font-semibold transition-colors hover:bg-yellow-600 ${
                        !isAvailable ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Add to Cart
                </button>
                <button
                    onClick={handleBuyNow}
                    disabled={!isAvailable}
                    className={`px-4 py-2 rounded bg-green-600 text-white font-semibold transition-colors hover:bg-green-700 ${
                        !isAvailable ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
    );
};
export default ProductCard;
