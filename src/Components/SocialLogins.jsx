import { FaFacebook, FaGithub } from "react-icons/fa";

const SocialLogins = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="space-y-4 w-full">
        {/* Facebook Login Button */}
        <button className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
          <FaFacebook className="w-5 h-5" />
          Login with Facebook
        </button>

        {/* GitHub Login Button */}
        <button className="w-full py-2 px-4 border-2 border-gray-800 text-gray-800 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600">
          <FaGithub className="w-5 h-5" />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
