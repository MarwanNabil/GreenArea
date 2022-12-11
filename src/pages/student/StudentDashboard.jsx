import { Link } from "react-router-dom";

import Logo from "../../images/Logo.png";

function StudentDashboard() {
  return (
    <>
      <div className="bg-img-student h-screen">
        <div className="flex flex-col items-center">
          <div className="justify-between w-full h-10 flex flex-row items-center gap-x-4 mb-6 bg-transparent py-14 px-5 shadow-green-700 drop-shadow-2xl">
            <div className="flex flex-row items-center ml-5">
              <Link to={"/studentdashboard"}>
                <img alt="logo" src={Logo} className="w-10" />
              </Link>

              <Link to={"/studentdashboard"} className="ml-2">
                <h2 className="font-bold text-3xl">Green Area</h2>
              </Link>
            </div>
            <div className="flex items-center mr-5">
              <Link to={"/"}>
                <button className="text-black text-center bg-white px-8 py-2 text-base font-medium rounded-lg hover:bg-green-600 hover:text-white">
                  Logout
                </button>
              </Link>
              <Link to={"/studentprofile"} className="ml-4">
                <div className="studentprofile"></div>
              </Link>
            </div>
          </div>
        </div>
        <p className="mb-20 text-center font-roboto font-semibold text-5xl text-white my-auto">
          Student Dashboard
        </p>
        <div className="flex flex-col items-center justify-center">
          <Link to={"test"} className="mb-7">
            <button className="text-white bg-green-700 px-3 py-3 text-lg font-semibold rounded-lg hover:bg-green-600 hover:text-white">
              {" "}
              Take A Test{" "}
            </button>
          </Link>
          <Link to={"viewscore"} className="mb-7">
            <button className="text-white bg-green-700 px-3 py-3 text-lg font-semibold rounded-lg hover:bg-green-600 hover:text-white">
              {" "}
              View My Score{" "}
            </button>
          </Link>
          <Link to={"viewchat"} className="mb-7">
            <button className="text-white bg-green-700 px-3 py-3 text-lg font-semibold rounded-lg hover:bg-green-600 hover:text-white">
              {" "}
              View Counselor / Chat{" "}
            </button>
          </Link>
          <Link to={"feedback"} className="mb-7">
            <button className="text-white bg-green-700 px-3 py-3 text-lg font-semibold rounded-lg hover:bg-green-600 hover:text-white">
              {" "}
              Feedback{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
