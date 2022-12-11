import { Link } from "react-router-dom";
import "../components/NavBar.css";
import Logo from "../images/Logo.png";
import "../styles/home.css"
import counselor1 from "../images/counselor_1.png"
import counselor2 from "../images/counselor_2.png"
import counselor3 from "../images/counselor_3.png"
import aboutImg from "../images/aboutimg.png"
function Home() {
    return (<>
        <div className="bg-img">
            <div className="bg-color flex flex-col items-center">
                <div className="justify-between w-full h-10 flex flex-row items-center gap-x-4 mb-6 bg-transparent py-14 px-5 shadow-green-700 drop-shadow-2xl">
                    <div className="flex flex-row items-center ml-5">
                        <Link to={'/home'}>
                            <img alt="logo" src={Logo} className="w-10" />
                        </Link>

                        <Link to={'/home'} className="ml-2">
                            <h2 className="font-bold text-3xl">Green Area</h2>
                        </Link>
                    </div>
                    <Link to={'/loginstudent'} className="mr-5">
                        <button className="text-black text-center bg-white px-8 py-2 text-base font-medium rounded-lg hover:bg-green-600 hover:text-white">Login</button>
                    </Link>
                </div>
                <div className="text-center font-roboto font-semibold text-6xl text-white my-auto">
                    <p className="mb-10">Green Area Always With You</p>
                    <Link to={'/councilregister'} >
                        <button className="w-1/2 text-black bg-white px-3 py-3 text-lg font-semibold rounded-lg hover:bg-green-600 hover:text-white"> Join Us </button>
                    </Link>
                </div>
            </div>
        </div>
        <section className="p-6 counselor-sec">
            <div className="container my-8">
                <p className="text-center text-2xl text-green-700 font-bold font-roboto my-8 mt-8">Expert Counselors</p>
                <div className="all-boxes">
                    <div className="box p-5 m-4">
                        <img src={counselor1} alt="counselor_1" />
                        <p className="counselor-dep">
                            CS Counselor
                        </p>
                        <p className="counselor-name">
                            ALi Mohamed
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, velit.
                        </p>
                    </div>
                    <div className="box p-5 m-4">
                        <img src={counselor2} alt="counselor_1" />
                        <p className="counselor-dep">
                            IS Counselor
                        </p>
                        <p className="counselor-name">
                            ALaa Mohamed
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, velit.
                        </p>
                    </div>
                    <div className="box p-5 m-4">
                        <img src={counselor3} alt="counselor_1" />
                        <p className="counselor-dep">
                            IT Counselor
                        </p>
                        <p className="counselor-name">
                            Mohamed Ahmed
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, velit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <p className="text-center text-4xl dark-color font-bold font-roboto my-16 mt-12">Our Activities</p>
                <p className="text-2xl font-bold my-4 mb-8 dark-color">
                    You can ask any qeustion you think about and an expert will answer you immediately .
                </p>
                <p className="text-2xl font-bold mt-10 mb-8 dark-color">
                    We do exams regularly .
                </p>
                <p className="text-2xl font-bold mt-10 mb-20 dark-color">
                    We have a great team of expert counselors .
                </p>
            </div>
        </section>

        <div className="bg-img-sec flex flex-col items-center justify-center">
            <p className="text-center text-5xl text-white font-bold font-roboto my-10">Don't Think, Begin Now</p>
            <Link to={'/loginstudent'}>
                <button className="mt-4 text-black text-center bg-white px-32 py-4 text-base font-medium rounded-lg hover:bg-green-600 hover:text-white">Login</button>
            </Link>
        </div>
        <section className="pb-24 counselor-sec">
            <div className="container">
                <p className="text-center text-4xl dark-color font-bold font-roboto py-16 mb-4 pt-12">About Us</p>
                <div className="flex">
                    <p className="text-lg leading-10 font-bold w-2/4 my-10 mr-8 dark-color">
                        A comprehensive educational site for all educational levels. Our motto is excellence and a better educational future. Our goal is to help students succeed and excel, improve their results, and develop their level and level of education .
                    </p>
                    <img src={aboutImg} className="w-2/4 rounded-xl shadow-2xl drop-shadow-xl" alt="aboutImg" />
                </div>
            </div>
        </section>
        <div className="text-white text-xl bg-footer text-center p-6 w-full">
            Copyright &copy; 2020, Green Area , All Rights Reserved
        </div>
    </>);
}

export default Home;