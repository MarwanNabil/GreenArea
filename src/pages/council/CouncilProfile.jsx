//image
import ProfileCover from "./images/profile.jpg";

//components
import Header from "./../../components/header";

import Rating from "./images/rating.png";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const CouncilProfile = () => {
  return (
    <>
      <Header>My Profile</Header>
      <div className="p-20 flex flex-col gap-y-8 items-center">
        <div className="bg-green-700 max-w-6xl min-w-[50rem] flex flex-1 flex-col items-center rounded-xl p-11 gap-y-7">
          <div className="bg-green-500 rounded-[10rem] w-[15rem] h-[15rem] flex justify-center items-center">
            <img src={ProfileCover} className="rounded-[10rem] w-56 h-56" />
          </div>
          <h1 className="text-3xl text-green-600">team-work</h1>
          <h1 className="text-2xl text-[#fee300]">ceo@greenarea.com</h1>
          <img src={Rating} alt="5 stars councilor" className="w-32" />
        </div>
        <Link to="/council">
          <Button>Back</Button>
        </Link>
      </div>
    </>
  );
};

export default CouncilProfile;
