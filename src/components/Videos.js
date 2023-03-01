import ClassNamees from '../styles/videos.module.css'
import Video from './Video';

export default function Videos() {
    return (
        <div className={ClassNamees.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}