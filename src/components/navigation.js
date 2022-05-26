import Button from './button';

function Navigation() {
    return (
        <nav className='desk_nav'>
            <ul className='desk_nav_list'>
            <li><a href='/#collection'>Collection</a></li>
            <li><a href='/#content'>Content</a></li>
            <li><a href='/#roadMap'>Road Map</a></li>
            <li><a href='/#team'>Team</a></li>
        </ul>
        <Button/>     
        </nav>
)}

export default Navigation;