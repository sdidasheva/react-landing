import "../styles/faq.scss";
import dot from '../images/purple_dot.png';
import questions from "../json/questions.json";
import Questions from '../components/faq-questions';
import {motion} from 'framer-motion';

function FAQ() {
    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <div className='faq'>
            <motion.div
                    initial={animateFrom}
                    whileInView={animateTo}
                    viewport = {{amount: 0.2}}
                    className='faq_subtitle'>
                    <img src={dot} alt='dot'/>
                    <p className='subtitle'>Faq</p>
                </motion.div>
                <motion.h2 
                    initial={animateFrom}
                    whileInView={animateTo}
                    viewport = {{amount: 0.2}}
                    className="faq_title">Frequent Questions
                </motion.h2>
                {questions && questions.map((question, index) => {
                    return (
                        <div className='questions' key={index}>
                            <Questions question={question.question} answer={question.answer} />
                        </div>
                    )
                })}
        </div>
    )
}

export default FAQ;