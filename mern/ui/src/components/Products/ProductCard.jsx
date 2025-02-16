import React from "react";

import "./ProductCard.css";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product/${product._id}`}>
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/products/${
              product.images[0]
            }`}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${product.price}</h3>
        <p className="product_title">{product.title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="star" /> {product.rating}
            </p>
            <p className="product_review_count">{product.ratingCounts}</p>
          </div>

          {product.stock > 0 && (
            <button className="add_to_cart">
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
