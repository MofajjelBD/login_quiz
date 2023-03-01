import Account from './Account';
import classNamees from '../styles/Nav.module.css';
import logo from '../assets/images/logo.svg'

export default function Nav() {
    return (
        <nav className={classNamees.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classNamees.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>React App Quiz Game</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
}