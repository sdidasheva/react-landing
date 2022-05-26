import '../styles/button.scss';

function Button() {
    return(
        <button className='btn'>
            <a href='https://opensea.io/' target="_blank">OpenSea</a>
            <div className='wave'></div>
        </button>
    )
}

export default Button;