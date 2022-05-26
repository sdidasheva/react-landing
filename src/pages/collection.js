import '../styles/collection.scss';
import dot from '../images/nft_dot.png';
import Block from "../components/collection_block";
import {motion} from 'framer-motion';

    const blocks =[
        {title: '6500 Bored Peeps', text: 'Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.'},
        {title: 'Mint Price & Date', text: 'Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.'},
        {title: 'Why Bored Peeps', text: 'Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.'}
    ]

    const animateFrom = {opacity:0, y: -40};
    const animateTo = {opacity: 1, y: 0};

function Collection() {

    return (
        <div className="collection" id="collection">
            <motion.div
            initial={animateFrom}
            whileInView={animateTo}
            viewport = {{amount: 0.2}}
            className='collection_subtitle'>
                <img src={dot} alt='dot'/>
                <p className='subtitle'>Collection</p>
            </motion.div>
            <motion.h2 
            initial={animateFrom}
            whileInView={animateTo}
            viewport = {{amount: 0.2}}
            className="collection_title">Meet Our Bored Peeps!</motion.h2>
            <div className="collection_blocks">
                {blocks.map((block, index) => <Block title={block.title} text={block.text} key={index} />)}
            </div>
        </div>
    )
}

export default Collection;