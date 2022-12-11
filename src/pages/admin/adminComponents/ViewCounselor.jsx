import { Link } from "react-router-dom";
import Header from "../../../components/header";
function ViewCounselor() {
    return (<>

        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>View Counselor</Header>
        </div>
        <div className="flex mb-12 flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's ID</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> 32311</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's Name</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> Mohamed Ali</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's Department</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> Computer Science</p>
                <label className="text-green-700 mb-3 mt-2" htmlFor="name">Counselor's Email</label>
                <p className="pl-12 py-1 mb-2 text-base rounded-md bg-gray"> MohamedMahmoud123@gmail.com</p>
                <div>
                    <button disabled className="w-45 mr-3 mt-5 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" >Previous Counselor</button>
                    <button className="w-45 ml-3 mt-5 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white" >Next Counselor</button>
                </div>
                <Link to={'/admin'}>
                    <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

    </>);
}

export default ViewCounselor;