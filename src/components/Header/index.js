import './styles.css';
import LogoImage from '../../assets/logo-ally.png';

function Header() {
    return (
        <header>
            <img src={LogoImage} alt='Logo' />
        </header>
    );
}

export default Header;