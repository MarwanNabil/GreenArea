import { Link } from "react-router-dom";
import Header from "../../../components/header";

function DeleteStudent() {
    return (<>
        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>Delete Student</Header>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's ID</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> 12001</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's name</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> Alaa Mohamed</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's email</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> AlaaMohamed123@gmail.com</p>
                <button className="mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white" >Delete Student</button>

                <Link to={'/admin'}>
                    <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

    </>);
}

export default DeleteStudent;