import Header from "../../../components/header";
import "../../../index.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function AddCounselor() {
    const [counselorName, setCounselorName] = useState('');
    const [counselorDepartment, setCounselorDepartment] = useState('');
    const [counselorEmail, setCounselorEmail] = useState('');
    const [active, setActive] = useState(false);
  
    useEffect(() => {
        if (counselorName && counselorEmail && counselorDepartment !== '')
            setActive(true);
        else
            setActive(false);
    }, [counselorName, counselorEmail,counselorDepartment])
  
    return (<>

        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>Add Counselor</Header>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's name</label>
                <input
                    type="text"
                    required
                    onChange={(e)=>{setCounselorName(e.target.value)}}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's department</label>
                <input
                    type="text"
                    required
                    onChange={(e)=>{setCounselorDepartment(e.target.value)}}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's email</label>
                <input
                    type="email"
                    required
                    onChange={(e)=>{setCounselorEmail(e.target.value)}}
                    className="pl-2 rounded-sm bg-gray"
                />
                <button disabled={!counselorName || !counselorDepartment ||!counselorEmail ? true : false} className={!active ? "mt-10 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" : "mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"} >Add Counselor</button>
                <Link to={'/admin'}>                
                <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

    </>)
}
export default AddCounselor;