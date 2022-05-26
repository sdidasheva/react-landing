import dot from '../images/pink_dot.png';
import {motion} from 'framer-motion';

const MapPlan = (plan) => {
    const animateFrom = {opacity:0, x: -100};
    const animateTo = {opacity: 1, x: 0};

    return (
        <motion.div 
        initial={animateFrom}
            whileInView={animateTo}
            viewport = {{amount: 0.2, once: true}}
            transition={{delay: 0.2}}
        className="map_card">
            <div className="percent_container">
                <img src={dot}  alt="dot"/>
                <p className='map_percent'>{plan.percent}</p>
            </div>
            <div className="map_info">
                <p className='map_quater'>{plan.quater}</p>
                <h3 className='map_title'>{plan.title}</h3>
                <p className='map_text'>{plan.text}</p>
            </div>
        </motion.div>
    )
}

export default MapPlan;