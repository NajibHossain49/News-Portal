import { FaShareAlt, FaRegEye } from "react-icons/fa"; 
import { AiFillStar } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-start p-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{news.author.name}</p>
              <p className="text-sm text-gray-500">{news.author.published_date}</p>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <FaShareAlt />
            </button>
          </div>
          <h2 className="text-xl font-semibold mt-2">{news.title}</h2>
        </div>
      </div>
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-700 text-sm">
          {news.details.slice(0, 150)}... <a href="#" className="text-primary">Read More</a>
        </p>
        <div className="flex items-center justify-between text-gray-600 mt-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-500 ${
                  i < Math.round(news.rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span>{news.rating.number}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;