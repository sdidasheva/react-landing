import React, {useState, useEffect} from "react";
import "../styles/scroll.scss";
import {FaArrowAltCircleUp} from "react-icons/fa";

function ScrollToTop() {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            }
            else {
                setShowScrollButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {showScrollButton && <FaArrowAltCircleUp
            className="scroll_btn"
            onClick={scrollTop}
            />}
        </div>
    )
}

export default ScrollToTop;