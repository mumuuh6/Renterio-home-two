import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ Gadget }) => {
    const {product_id, product_title, product_image, price, description } = Gadget;
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={product_image}
                    alt={product_title}
                    className="w-full h-48 object-fit"
                />
            </figure>
            <div className="p-4">
                <h2 className="card-title">{product_title}</h2>
                <p className="font-semibold text-lg text-gray-400">Price:${price}</p>
                <div className="card-actions">
                    <button className="btn border-2 border-purple-500 bg-white text-purple-500"><Link to={`/gadgets/${product_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Book;
