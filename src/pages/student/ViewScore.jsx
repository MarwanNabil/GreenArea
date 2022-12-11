import { Link } from "react-router-dom";

import Logo from "../../images/Logo.png";

function ViewScore() {
  return (
    <>
      <div className="bg-footer h-screen">
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
        <div className="h-4/6 flex flex-col items-center justify-center">
          <p className="text-center mt-10 text-white text-4xl font-bold">
            Your Score Is :
          </p>
          <p className="text-center mt-10 text-white text-4xl font-bold">85</p>
          <Link to={"/studentdashboard"} className="mt-10">
            <button className="w-full bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white">
              {" "}
              Back To Dashboard{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ViewScore;
