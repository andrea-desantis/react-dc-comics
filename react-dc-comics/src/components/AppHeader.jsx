import './AppHeader.css';
import fotoLogo from "../assets/img/dc-logo.png"

function AppHeader() {
    return(
        <header className='flex between'>
            <div className="flex center">
                <img src={fotoLogo} alt="logo" className='logo'/>
            </div>
            <div className='flex center'>
                <ul className='flex gap-25 between'>
                    <li><a href="">CHARACTERS</a></li>
                    <li><a href="">COMICS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">COLLECTIBLES</a></li>
                    <li><a href="">VIDEOS</a></li>
                    <li><a href="">FANS</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>
            </div>
        </header>
    );
}

export default AppHeader;