import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-5">Find Us On</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start">
          <FaFacebook className="w-5 h-5 mr-2 text-blue-600" /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="w-5 h-5 mr-2 text-blue-500" /> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="w-5 h-5 mr-2 text-pink-500" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
