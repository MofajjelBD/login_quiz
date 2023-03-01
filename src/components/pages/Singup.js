import Illustration from "../Illustration";
import Form from "../Form";
import classN from "../../styles/singup.module.css";
import Textinput from "../Textinput";
import Checkbox from "../Checkbox";
import Button from "../Button";

export default function Singup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classN.signup} required `}>
                    <Textinput type="text" placeholder="Enter name" icon="person" />
                    <Textinput type="emial" placeholder="Enter Email" icon="alternate_email" />
                    <Textinput type="password" placeholder="Enter your password" icon="lock" />
                    <Textinput type="password" placeholder="Enter your password" icon="lock" />
                    <Checkbox txt="I agree to singup" />
                    <Button>Submit now</Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}