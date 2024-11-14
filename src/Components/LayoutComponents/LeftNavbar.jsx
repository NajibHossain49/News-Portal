import React, { useState, useEffect } from "react";

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
      <div className="mt-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="w-full bg-gray-200 text-black px-4 py-2 rounded-md mb-2 hover:bg-gray-300 focus:outline-none focus:ring-0"
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
