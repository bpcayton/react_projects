import React from "react";

import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../hooks/useData";

const ProductsSidebar = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { data: categories, error } = useData("/category");
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((cat) => (
            <LinkWithIcon
              key={cat._id}
              title={cat.name}
              link={`products?category=${cat.name}`}
              emoji={`${baseUrl}/category/${cat.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
