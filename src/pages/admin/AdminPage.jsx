//components
import Header from "../../components/header";
import Inputform from "../../components/InputForm";
import Button from "./../../components/button";
import Text from "../../components/text";
import Item from "./../../components/Item";

//images
import Cover from "./AdminCover.jpg";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-y-11">
      <Header>Admin Dashboard</Header>
      <div className="p-2 flex flex-col gap-7 self-center">
        <div className="bg-green-700 px-2 py-2 flex self-center rounded-3xl">
          <img
            src={Cover}
            alt="cover photo."
            className="rounded-3xl max-h-80 max-w-6xl"
          />
        </div>
        <Text className="text-2xl text-center">
          Control everything with a real smart system.
        </Text>
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-10 justify-center">
          <Item>Add Councilor</Item>
          <Item>View Councilor</Item>
          <Item>Delete Councilor</Item>
          <Item>Add Question</Item>
          <Item>View Question</Item>
          <Item>Delete Question</Item>
          <Item>Add Student</Item>
          <Item>View Student</Item>
          <Item>Delete Student</Item>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
