import classN from '../styles/Qustion.module.css';
import Answers from '../components/Answers';

export default function Qustion() {
    return (
        <>
            <div className={classN.question}>
                <div className={classN.qtitle}>
                    <span className="material-icons-outlined"> help_outline </span>
                    Here goes the question from Learn with Sumit?
                </div>
                <Answers />
            </div>
        </>
    );
}