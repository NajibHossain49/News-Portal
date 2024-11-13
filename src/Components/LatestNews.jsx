import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-white px-4 py-2 text-lg font-semibold rounded-lg shadow-md whitespace-nowrap">
        Latest News
      </p>

      <Marquee pauseOnHover={true}>
        <span className="inline-block">
          <Link
            to="/react-release"
            className="mr-6 text-blue-500 hover:underline"
          >
            New React version released! Stay updated with the latest changes in
            the framework.
          </Link>
          <Link
            to="/nodejs-launch"
            className="mr-6 text-blue-500 hover:underline"
          >
            Node.js 18.0 launched with new performance enhancements and
            features.
          </Link>
          <Link
            to="/vuejs-typescript"
            className="mr-6 text-blue-500 hover:underline"
          >
            Vue.js announces official support for TypeScript starting from
            version 4.0.
          </Link>
          <Link to="/nextjs-13" className="mr-6 text-blue-500 hover:underline">
            Next.js 13 introduces React Server Components with improved
            performance.
          </Link>
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
