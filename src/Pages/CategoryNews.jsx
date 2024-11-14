import React from "react";
import { useLoaderData } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold mb-3 text-center">News Home</h2>
      <div className="">
        {news.map((SingleNews, index) => (
          <NewsCard key={index} news={SingleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
