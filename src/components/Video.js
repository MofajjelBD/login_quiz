import classNamees from '../styles/video.module.css'
import image from '../assets/images/3.jpg'

export default function Video() {
    return (
        <a href="quiz.html"
        ><div className={classNamees.video}>
                <img src={image} alt="Video title here" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classNamees.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}