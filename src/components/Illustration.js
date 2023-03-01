import classN from "../styles/illustration.module.css";
import singupimage from '../assets/images/signup.svg'

export default function Illustration() {
    return (
        <>
            <div className={classN.illustration}>
                <img src={singupimage} alt="Signup" />
            </div>
        </>
    );
}