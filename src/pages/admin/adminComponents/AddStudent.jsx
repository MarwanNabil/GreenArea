import Header from "../../../components/header";
import "../../../index.css";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

function AddStudent() {
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [active, setActive] = useState(false);

    useEffect(()=> {
        if( studentName &&studentEmail !=='')
            setActive (true);
        else
            setActive (false);
    },[studentName,studentEmail])
    
    return (<>

        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>Add Student</Header>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-2 mt-1" htmlFor="name">Student's name</label>
                <input
                    type="text"
                    required
                    onChange={(e)=>{setStudentName(e.target.value)}}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-2 mt-4" htmlFor="name">Student's email</label>
                <input
                    type="email"
                    required
                    onChange={(e)=>{setStudentEmail(e.target.value)}}
                    className="pl-2 rounded-sm bg-gray"
                />
                <button disabled={!studentName || !studentEmail ? true : false} className={!active ? "mt-10 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" : "mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"} >Add Student</button>
                <Link to={'/admin'}>                
                <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

    </>);
}

export default AddStudent;