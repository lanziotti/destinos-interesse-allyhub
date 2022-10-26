import './styles.css';
import MiniLogoImage from '../../assets/mini-logo-ally.png';

function Footer() {
    return (
        <footer>
            <div className='footer-image'>
                <img src={MiniLogoImage} alt='Logo' />
            </div>
            <div className='footer-text'>
                <strong>Todos os direitos reservados a Rodrigo Lanziotti</strong>
            </div>
        </footer>
    );
}

export default Footer;