import Checkbox from '../components/Checkbox';
import classN from '../styles/Answers.module.css';

export default function Answers() {
    return (
        <div className={classN.answers}>
            <Checkbox className={classN.answer} txt="A New Hope 1" />
        </div>
    );
}