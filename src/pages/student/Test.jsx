import { Link } from "react-router-dom";

import Logo from "../../images/Logo.png";
function Test() {
    return (<>
        <div className="bg-footer h-screen">
            <div className="flex flex-col items-center">
                <div className="justify-between w-full h-10 flex flex-row items-center gap-x-4 mb-6 bg-transparent py-14 px-5 shadow-green-700 drop-shadow-2xl">
                    <div className="flex flex-row items-center ml-5">
                        <Link to={'/studentdashboard'}>
                            <img alt="logo" src={Logo} className="w-10" />
                        </Link>

                        <Link to={'/studentdashboard'} className="ml-2">
                            <h2 className="font-bold text-3xl">Green Area</h2>
                        </Link>
                    </div>
                    <div className="flex items-center mr-5">
                        <Link to={'/home'}>
                            <button className="text-black text-center bg-white px-8 py-2 text-base font-medium rounded-lg hover:bg-green-600 hover:text-white">Logout</button>
                        </Link>
                        <Link to={'/studentprofile'} className="ml-4">
                            <div className="studentprofile" ></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center flex flex-col gap-y-11 mt-12">
                <p className="text-white text-4xl font-bold">View Question</p>
            </div>
            <div className="flex my-12 flex-col items-center w-full">
                <form className="flex flex-col text-xl w-2/5">
                    <label className="text-white mb-3 mt-2" htmlFor="name">Question</label>
                    <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> Q1</p>
                    <label className="text-white mb-3 mt-2" htmlFor="name">Enter your Answer</label>
                    <input
                        type="text"
                        required
                        className="pl-12 rounded-md h-8 bg-gray"
                    />
                    <div>
                        <button disabled className="w-45 mr-3 mt-5 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" >Previous Question</button>
                        <button className="w-45 ml-3 mt-5 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white" >Next Question</button>
                    </div>
                    <Link to={'/studentdashboard'} className="mt-10">
                        <button className="w-full bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                    </Link>
                </form>
            </div>
        </div>
    </>);
}
export default Test;
