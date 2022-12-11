import Header from "../../components/header";
import "../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function CouncilRegister() {
    const [counselorName, setCounselorName] = useState('');
    const [counselorEmail, setCounselorEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (counselorName && counselorEmail &&  pwd !== '')
            setActive(true);
        else
            setActive(false);
    }, [counselorName, counselorEmail,  pwd])

    return (<>

        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>Register As Counselor</Header>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Enter Your Name</label>
                <input
                    type="text"
                    required
                    onChange={(e) => { setCounselorName(e.target.value) }}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Choose Your Department</label>
                <div className="flex text-green-700 mb-2">
                    <label className=" m-auto check text-xl">CS
                        <input className="ml-2" type="radio" name="radio" />
                    </label>
                    <label className="m-auto check">IS
                        <input className="ml-2" type="radio" name="radio" />
                    </label>
                    <label className="m-auto check">IT
                        <input className="ml-2" type="radio" name="radio" />
                    </label>

                </div>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Enter Your Email</label>
                <input
                    type="email"
                    required
                    onChange={(e) => { setCounselorEmail(e.target.value) }}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Enter Your Password</label>
                <input
                    type="password"
                    required
                    onChange={(e) => { setPwd(e.target.value) }}
                    className="pl-2 rounded-sm bg-gray"
                />
                <button disabled={!counselorName ||  !counselorEmail || !pwd ? true : false} className={!active ? "mt-10 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" : "bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"} >Register</button>
                <Link to={'/home'}  className="mt-10">
                    <button className="w-full mb-14 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Home </button>
                </Link>
            </form>
        </div>

    </>)
}
export default CouncilRegister;