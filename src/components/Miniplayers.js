import Name from '../styles/Miniplayers.module.css';
import image from '../assets/images/3.jpg';

export default function Miniplayers() {
    return (
        <div className={`${Name.miniPlayer} ${Name.floatingBtn}`}>
            <span className={`material-icons-outlined open ${Name.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined open ${Name.close}`}> close </span>
            <img src={image} alt="Alt tag" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}