import { Link } from "react-router-dom";
import Header from "../../../components/header";
import Button from "../../../components/button";
import Inputform from "../../../components/InputForm";

function ViewCounselor() {
  return (
    <>
      <div className="text-center flex flex-col gap-y-11 mt-12">
        <Header>View Counselor</Header>
      </div>
      <div className="flex mb-12 flex-col items-center mt-12 w-full">
        <form className="flex flex-col text-lg w-2/5">
          <Inputform>Counselor's ID</Inputform>
          <Inputform>Counselor's Name</Inputform>
          <Inputform>Computer Science</Inputform>
          <Inputform>Counselor's Email</Inputform>
          <div className="flex flex-row justify-between mt-5">
            <Button>Previous Counselor</Button>
            <Button>Next Counselor</Button>
          </div>
          <Link to={"/admin"}>
            <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white">
              {" "}
              Back To Dashboard{" "}
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default ViewCounselor;
