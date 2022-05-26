import '../styles/roadmap.scss';
import dot from '../images/pink_dot.png';
import plans from '../json/mapCard.json';
import MapPlan from '../components/map_plan';
import {motion} from 'framer-motion';

function RoadMap() {
    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <div className="roadMap"id="roadMap">
            <motion.div
            initial={animateFrom}
            whileInView={animateTo}
            viewport = {{amount: 0.2}}
            className='roadMap_subtitle'>
                    <img src={dot} alt='dot'/>
                    <p className='subtitle'>Releases</p>
            </motion.div>
            <motion.h2 
            initial={animateFrom}
            whileInView={animateTo}
            viewport = {{amount: 0.2}}
            className="roadMap_title">Our Roadmap</motion.h2>

            {plans && plans.map((plan, index) => {
                return (
                    <motion.div className='map_cards' key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport = {{amount: 0.2}}
                    ><MapPlan 
                    percent={plan.percent} quater={plan.quater} title={plan.title} text={plan.text} /></motion.div>
                    
                )
            })}
        </div>
    )
}

export default RoadMap;