import "../styles/team.scss";
import dot from '../images/pink_dot.png';
import circle from "../images/team_circle1.png";
import circle2 from "../images/team_circle2.png";
import {motion} from 'framer-motion';

function Team() {
    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <div className="team" id="team">
            <div className='team-top'></div>
            <div className='team-main'>
                <motion.div
                    initial={animateFrom}
                    whileInView={animateTo}
                    viewport = {{amount: 0.2}}
                    className='team_subtitle'>
                    <img src={dot} alt='dot'/>
                    <p className='subtitle'>Team</p>
                </motion.div>
                <motion.h2 
                    initial={animateFrom}
                    whileInView={animateTo}
                    viewport = {{amount: 0.2}}
                    className="team_title">Meet Our Team
                </motion.h2>
                <div className='team_members'>
                    <div className='member'>
                        <div className='member_img jennifer'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>CEO</p>
                            <h3 className='member_name'>Jennifer</h3>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member_img matthew'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>Developer</p>
                            <h3 className='member_name'>Matthew</h3>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member_img john'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>Developer</p>
                            <h3 className='member_name'>John</h3>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member_img justin'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>Designer</p>
                            <h3 className='member_name'>Justin</h3>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member_img jessica'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>Designer</p>
                            <h3 className='member_name'>Jessica</h3>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member_img katty'></div>
                        <img className='member_circle1'  src={circle2} alt="circle" />
                        <div className='member_info'>
                            <img className='member_circle2' src={circle} alt="circle" />
                            <p className='member_position'>Designer</p>
                            <h3 className='member_name'>Katty</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-bottom'></div>
        </div>
    )
}

export default Team;