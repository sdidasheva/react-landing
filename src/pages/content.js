import {useState} from 'react';
import '../styles/content.scss';
import dot from '../images/red_dot.png'
import cards from '../json/contentCard.json'
import ContentCard from '../components/content_card';
import {BsArrowRightCircle} from 'react-icons/bs';
import {BsArrowLeftCircle} from 'react-icons/bs'
import {motion} from 'framer-motion';

function Content() {
    const [current, setCurrent] = useState(0);
    const length = cards.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};
    return(
        <div className='content' id="content">
            <div className='content-top'></div>
            <div className='content-main'>
                <motion.div 
                initial={animateFrom}
                whileInView={animateTo}
                viewport = {{amount: 0.2}}
                className='content_subtitle'>
                    <img src={dot} alt='dot'/>
                    <p className='subtitle'>Rarity</p>
                </motion.div>
                <motion.h2 
                initial={animateFrom}
                whileInView={animateTo}
                viewport = {{amount: 0.2}}
                className="content_title">Exclusive Content</motion.h2>
                <div className='content_cards'>
                    
                    {cards && cards.map((card, index) => {
                        return(
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>{index === current &&
                            (<ContentCard title={card.title} tier={card.tier} tierImg={card.tierImg} text={card.text} personImg={card.personImg}/>)}
                            </div>
                        )
                    })} 
                    <div className='arrows'>
                        <BsArrowLeftCircle className='left-arrow' onClick={prevSlide}/>
                        <BsArrowRightCircle className='right-arrow' onClick={nextSlide}/>
                    </div>
                    
                </div>
            </div>
            <div className='content-bottom'></div>
        </div>
    )
}

export default Content;