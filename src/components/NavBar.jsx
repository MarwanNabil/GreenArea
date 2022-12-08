//gradient
import "./NavBar.css";

//images
import Logo from "../images/Logo.png";

const NavBar = () => {
  return (
    <div className="w-full h-20 flex flex-row items-center gap-x-4 mb-6 bg-[#E0E0E0] py-14 px-5 shadow-green-700 drop-shadow-2xl tablet:justify-center mobile:justify-center laptop:justify-start desktop:justify-start">
      <img alt="logo" src={Logo} className="w-20" />
      <h2 className="font-bold">Green Area</h2>
    </div>
  );
};

export default NavBar;
