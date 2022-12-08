//components
import Header from "../components/header";
import Inputform from "../components/InputForm";
import Button from "./../components/button";
import Text from "../components/text";

//images
import Cover from "./counseling.jpg";

const HomePage = () => {
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
          <Inputform>{"ID"}</Inputform>
          <Inputform>{"Password"}</Inputform>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
