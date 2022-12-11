import { Link } from "react-router-dom";
import Header from "../../../components/header";
import Inputform from "../../../components/InputForm";
function DeleteQuestion() {
  return (
    <>
      <div className="text-center flex flex-col gap-y-11 mt-12">
        <Header>Delete Question</Header>
      </div>
      <div className="flex flex-col items-center mt-12 w-full">
        <form className="flex flex-col text-lg w-2/5">
          <Inputform>Question</Inputform>
          <Inputform>Correct Answer</Inputform>
          <div>
            <button className="w-45 mr-3 mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white">
              Delete Question
            </button>
            <button className="w-45 ml-3 mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white">
              Next Question
            </button>
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

export default DeleteQuestion;
