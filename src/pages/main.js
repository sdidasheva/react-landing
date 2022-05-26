import '../styles/main.scss';
import dot from '../images/nft_dot.png';
import Button from '../components/button';

function Main() {
    return (
        <div className='main_nft'>
            <div className='nft_container'>
                <div className='main_subtitle'>
                    <img src={dot} alt='dot'/>
                    <p className='subtitle'>NFT Collection</p>
                </div>
                <h1 className='main_title'>Bored <br/> NFT Peeps</h1>
                <p className='main_text'>Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.</p>
                <Button/>
            </div>
        </div>
    )
}

export default Main;