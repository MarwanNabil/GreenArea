import Header from "../../../components/header";
import "../../../index.css";
import { Link } from "react-router-dom";
import Inputform from "../../../components/InputForm";
import Button from "../../../components/button";

function AddStudent() {
  return (
    <>
      <div className="text-center flex flex-col gap-y-11 mt-12">
        <Header>Add Student</Header>
      </div>
      <div className="flex flex-col items-center mt-12 w-full">
        <form className="flex flex-col text-lg w-2/5">
          <Inputform>Student's name</Inputform>
          <Inputform>Student's email</Inputform>
          <Button>Add Student</Button>
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

export default AddStudent;
