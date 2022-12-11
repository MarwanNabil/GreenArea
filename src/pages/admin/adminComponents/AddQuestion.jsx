import Header from "../../../components/header";
import "../../../index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AddQuestion() {
    const [active, setActive] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (answer && question !== '')
            setActive(true);
        else
            setActive(false);
    }, [answer, question])
    return (<>

        <div className="text-center flex flex-col gap-y-11 mt-12">
            <Header>Add Question</Header>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
            <form className="flex flex-col text-lg w-2/5">
                <label className="text-green-700 mb-2 mt-1" htmlFor="name">New Question</label>
                <input
                    type="text"
                    required
                    onChange={(e) => { setQuestion(e.target.value) }}
                    className="pl-2 rounded-sm bg-gray"
                />
                <label className="text-green-700 mb-2 mt-4" htmlFor="name">Correct Answer</label>
                <input
                    type="text"
                    required
                    onChange={(e) => { setAnswer(e.target.value) }}
                    className="pl-2 rounded-sm bg-gray"
                />
                <button disabled={!question || !answer ? true : false} className={!active ? "mt-8 px-5 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white" : "mt-8 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"} >Add Question</button>
                <Link to={'/admin'}>                
                <button className="w-full mt-10 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"> Back To Dashboard </button>
                </Link>
            </form>
        </div>

        {/* className="mt-8 bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white" */}
    </>);
}

export default AddQuestion;