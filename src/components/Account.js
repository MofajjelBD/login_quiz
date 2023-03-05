import classNmaees from '../styles/Account.module.css';
import { Link } from 'react-router-dom';


export default function Account() {
    return (
        <>
            <div className={classNmaees.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <Link to="/singup">Sign Up</Link>
                <Link to="/login">Sign In</Link>
                <span className="material-icons-outlined" title="Logout"> logout </span>
            </div>
        </>
    );
}