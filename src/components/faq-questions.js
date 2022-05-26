import React, {useState} from 'react';
import plus from "../images/plus.svg";

function Questions(question) {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="question">
            <button
            onClick={toggleState}
            className="question_visible">
                <span>{question.question}</span>
                <img
                className={toggle && "active"}
                src={plus} alt="plus" />
            </button>
            <div 
            className={toggle ? "question_toggle animated" : "question_toggle"} 
            style={{height: toggle ? "fit-content" : "0px"}}>
                <p aria-hidden={toggle ? "true" : "false"} className='question_answer'>{question.answer}</p>
            </div>
        </div>
    )
}

export default Questions;