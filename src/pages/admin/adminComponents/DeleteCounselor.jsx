import { Link } from "react-router-dom";
import Header from "../../../components/header";
import Button from "../../../components/button";
import Inputform from "../../../components/InputForm";

function DeleteCounselor() {
  return (
    <>
      <div className="text-center flex flex-col gap-y-11 mt-12">
        <Header>Delete Counselor</Header>
      </div>
      <div className="flex flex-col items-center m-10 w-full">
        <form className="flex flex-col gap-y-4  w-2/5">
          <Inputform>Counselor's ID</Inputform>
          <Inputform>Counselor's name</Inputform>
          <Inputform>Counselor's department</Inputform>
          <Inputform>Counselor's email</Inputform>
          <Button> Delete Counselor</Button>
          <Link to={"/admin"}>
            <Button>Back To Dashboard</Button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default DeleteCounselor;
