//components
import Header from "../components/header";
import Inputform from "../components/InputForm";
import Button from "./../components/button";
import Text from "../components/text";

//images
import Cover from "./counseling.jpg";

//util
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  let id = "",
    password = "";

  const onIdChange = (event) => {
    id = event.target.value;
  };

  const onPasswordChange = (event) => {
    password = event.target.value;
  };

  const onLogin = () => {
    if (id === "201900795") {
      navigate("/admin");
    } else if (id === "201900633") {
      navigate("/studentdashboard");
    } else {
      navigate("/council");
    }
  };

  return (
    <div className="flex flex-col gap-y-11">
      <Header>Login</Header>
      <div className="p-2 flex flex-col gap-7 self-center">
        <div className="bg-green-700 px-2 py-2 flex self-center rounded-3xl">
          <img src={Cover} alt="cover photo." className="rounded-3xl" />
        </div>
        <Text className="text-2xl text-center">
          One step further upon success.
        </Text>
        <form className="flex flex-col gap-y-11 ">
          <Inputform onChangeCapture={onIdChange}>{"ID"}</Inputform>
          <Inputform onChangeCapture={onPasswordChange} type="password">
            {"Password"}
          </Inputform>
          <Button onClick={onLogin}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
