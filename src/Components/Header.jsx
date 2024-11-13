import { format } from "date-fns";
import Logo from "../assets/logo.png";
import { enUS } from "date-fns/locale";

const Header = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date using Bengali locale
  const formattedDate = format(currentDate, "EEEE, dd MMMM yyyy", {
    locale: enUS,
  });
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-6">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="text-gray-400 py-1 ">
        Your Trusted Source for News, Insights, and Real-Time Updates.
      </h1>
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
};

export default Header;
