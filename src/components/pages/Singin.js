import Illustration from "../Illustration";
import Form from "../Form";
import classN from "../../styles/singin.module.css";
import Textinput from "../Textinput";
import Button from "../Button";
import singupimage from '../../assets/images/login.svg'


export default function Singup() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration singupimage={`${singupimage}`} />
                <Form className={`${classN.login} required `}>
                    <Textinput type="email" placeholder="Enter Email" icon="alternate_email" />
                    <Textinput type="password" placeholder="Enter your password" icon="lock" />
                    <Button><span>Submit now</span></Button>
                    <div className="info">
                        Don't have an account? <a href="login.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}