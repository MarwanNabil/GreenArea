import Header from "../../components/header";
import Inputform from "../../components/InputForm";
import Textareaform from "./../../components/TextAreaForm";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const SystemFeedback = () => {
  return (
    <>
      <Header>Give a Feedback</Header>
      <div className="flex flex-col justify-center p-6 gap-y-16">
        <Textareaform>Feedback</Textareaform>
        <div className="flex flex-row justify-center gap-x-9 ">
          <Link to="/council">
            <Button>Back</Button>
          </Link>
          <Button>Send</Button>
        </div>
      </div>
    </>
  );
};

export default SystemFeedback;
