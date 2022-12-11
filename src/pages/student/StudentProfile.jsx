import { Link } from "react-router-dom";

import Logo from "../../images/Logo.png";

function StudentProfile() {
    return (<>
        <div className="counselor-sec h-screen">
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
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="studentprofile-img" ></div>
                <div>
                    <p className="mt-20 text-lg font-semibold font-roboto" >Name : Ali Mohamed</p>
                    <p className="mt-5 text-lg font-semibold font-roboto" >Age : 32</p>
                    <p className="mt-5 text-lg font-semibold font-roboto" >Email : AliMohamed123@gmail.com</p>
                    <p className="mt-5 mb-5 text-lg font-semibold font-roboto" >Score : 85</p>
                    <Link to={'/studentdashboard'}>
                        <button className="w-full text-white text-center bg-footer px-8 py-2 text-base font-medium rounded-lg hover:bg-green-600 hover:text-white">Back To Dashboard</button>
                    </Link>
                </div>
            </div>




        </div>



    </>);
}

export default StudentProfile;