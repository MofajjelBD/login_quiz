import Answers from '../Answers';
import Progressar from '../Prograss';
import Miniplayer from '../Miniplayers';
// import className from '../../styles/Quiz.module.css';

export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <Progressar />
            <Miniplayer />
        </>
    );
}