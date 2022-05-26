import "../styles/footer.scss";
import dot from '../images/purple_dot.png';
import {motion} from 'framer-motion';

function Footer() {
    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <div className="footer">
            <div className="footer_top"></div>
            <div className="footer_main">
                <motion.div
                initial={animateFrom}
                whileInView={animateTo}
                viewport = {{amount: 0.2}}
                className="footer_titles">
                    <h2 className="footer_title">Follow us on</h2>
                    <div className="footer_subtitle">
                        <img src={dot} alt='dot'/>
                        <p className='subtitle'>Navigation</p>
                    </div>
                </motion.div>
                <div className="footer_items">
                    <ul className="footer_social">
                        <li className="social_item"><a href="#">Discord</a></li>
                        <li className="social_item"><a href="#">Twitter</a></li>
                        <li className="social_item"><a href="#">Instagram</a></li>
                        <li className="social_item"><a href="#">Facebook</a></li>
                    </ul>
                    <ul className="footer_nav">
                    <li className="nav_item"><a href="#">Home</a></li>
                    <li className="nav_item"><a href="#">Style Guide</a></li>
                    <li className="nav_item"><a href="#">Licenses</a></li>
                    <li className="nav_item"><a href="#">Changelog</a></li>
                    </ul>
                </div>
                <div className="footer_credits">
                    <p className="credits_item">Powered by Webflow</p>
                    <p className="credits_item">Made by Tim Poličar</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;