import classN from '../styles/Analysis.module.css'
import Qustion from '../components/Qustion'

export default function Analysis() {
    return (
        <div className={classN.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            <Qustion />
        </div>
    );
}