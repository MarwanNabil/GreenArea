import Header from "../../../components/header";
import "../../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Inputform from "../../../components/InputForm";
import Button from "../../../components/button";
function AddCounselor() {
  return (
    <>
      <div className="text-center flex flex-col gap-y-11 mt-12">
        <Header>Add Counselor</Header>
      </div>
      <div className="flex flex-col items-center mt-12 w-full">
        <form className="flex flex-col text-lg gap-y-8 w-2/5">
          <Inputform>Counselor's name</Inputform>
          <Inputform>Counselor's department</Inputform>
          <Inputform>Counselor's email</Inputform>
          <Button>Add Counselor</Button>
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
export default AddCounselor;
