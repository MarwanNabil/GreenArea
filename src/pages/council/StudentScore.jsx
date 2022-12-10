//util
import { Link } from "react-router-dom";

//components
import Header from "../../components/header";
import Inputform from "../../components/InputForm";
import Button from "./../../components/button";
import Text from "../../components/text";
import Item from "./../../components/Item";

//images
import StudentCover from "./images/successful-college-student-lg.png";

const StudentScore = () => {
  return (
    <>
      <Header>View Student Score</Header>
      <div className="flex flex-col justify-center gap-y-5 my-40">
        <div className="bg-green-700 px-2 py-2 flex self-center rounded-3xl">
          <img src={StudentCover} alt="cover photo." className="rounded-3xl" />
        </div>
        <div className="flex flex-col justify-center gap-y-8">
          <Inputform>Student's Name</Inputform>
          <Inputform>Student's Id</Inputform>
          <div className="flex flex-row justify-center gap-x-14">
            <Link to="/council">
              <Button>Back</Button>
            </Link>
            <Button>Fetch</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentScore;
