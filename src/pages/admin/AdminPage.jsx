//components
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Text from "../../components/text";

//images
import Cover from "./AdminCover.jpg";

const AdminPage = () => {
  return (<>
  <div className="flex">
    <div className="w-3/12 bg-gray-light pl-10 text-xl flex-col flex pt-8">
          <p className="color-p text-2xl font-bold mt-1 mb-5">Counselor</p>
          <Link className="my-1 color-link font-semibold hover:text-green-600" to={'AddCounselor'}>Add Counselor</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'ViewCounselor'}>View Counselor</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'DeleteCounselor'}>Delete Counselor</Link>
          <p className="color-p text-2xl font-bold mt-5 mb-5">Question</p>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'AddQuestion'}>Add Question</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'ViewQuestion'}>View Question</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'DeleteQuestion'}>Delete Question</Link>
          <p className="color-p text-2xl font-bold mt-5 mb-5">Student</p>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'AddStudent'}>Add Student</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'ViewStudent'}>View Student</Link>
          <Link  className="my-1 color-link font-semibold hover:text-green-600"  to={'DeleteStudent'}>Delete Student</Link>
    </div>
    <div className="he-80 w-1 bg-green-500" />
    <div className="flex flex-col gap-y-11 col-span-8">
      <Header>Admin Dashboard</Header>
      {/* <div className="w-3/4 bg-green-500 h-1" /> */}
        <Text className="text-2xl text-center">
          Control everything with a real smart system.
        </Text>
      <div className="p-2 flex flex-col gap-7 self-center">
        <div className="bg-green-700 px-2 py-2 flex self-center rounded-3xl">
          <img
            src={Cover}
            alt="cover photo."
            className="rounded-3xl max-h-80 max-w-6xl"
          />
        </div>
        </div>
    </div></div>
    </> );
};

export default AdminPage;
