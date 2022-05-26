import '../styles/header.scss';
import logo from '../images/logo.svg';
import Navigation from './navigation';
import MobileNavigation from './mobile_nav';

function Header() {
    return (
        <header className="header">
            <div className="wrapper_header">
                <img className='header_logo' src={logo} alt="Logo" />
                <Navigation/>
                <MobileNavigation/>
            </div>
        </header>
    )
}

export default Header;