import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold text-center">All Categories</h2>
      <div className="flex flex-col gap-2 mt-4 text-center">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.id}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md mb-2 hover:bg-gray-300"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
