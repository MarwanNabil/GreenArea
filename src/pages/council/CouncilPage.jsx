//components
import Header from "../../components/header";
import Inputform from "../../components/InputForm";
import Button from "./../../components/button";
import Text from "../../components/text";
import Item from "./../../components/Item";

//images
import CouncilCover from "./images/Counselor.jpg";

//util
import { Link } from "react-router-dom";

const CouncilPage = () => {
  return (
    <>
      <Header>Councilor Page</Header>
      <div className="flex flex-col justify-center gap-y-5">
        <div className="bg-green-700 px-2 py-2 flex self-center rounded-3xl">
          <img src={CouncilCover} alt="cover photo." className="rounded-3xl" />
        </div>
        <div className="flex flex-row justify-center gap-8">
          <Link to="/council/profile">
            <Button>View My Profile</Button>
          </Link>
          <Link to="/council/chat">
            <Button>Chat</Button>
          </Link>
          <Link to="/council/student-score">
            <Button>Student Scores</Button>
          </Link>
          <Link to="/council/system-feedback">
            <Button>System Feedback</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CouncilPage;
