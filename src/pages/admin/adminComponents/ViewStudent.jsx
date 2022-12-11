import { Link } from "react-router-dom";
import Header from "../../../components/header";
function ViewStudent() {
    return (  <>
<div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>View Student</Header>
        </div>
        <div className="flex mb-12 flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's ID</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> 12001</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's Name</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> Mahmoud Ahmed</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Student's Email</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> MahmoudAhmed123@gmail.com</p>
                <div>
                    <button disabled className="w-45 mr-3 mt-5 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" >Previous Student</button>
                    <button className="w-45 ml-3 mt-5 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white" >Next Student</button>
                </div>
                <Link to={'/admin'}>
                    <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

    </>);
}

export default ViewStudent;