import className from '../styles/Prograss.module.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Prograss() {
    return (
        <div className={className.progressBar}>
            <div className={className.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={className.rangeArea}>
                <div className={className.tooltip}>24% Cimplete!</div>
                <div className={className.rangeBody}>
                    <div className={className.progress} style={{ width: '20%' }}></div>
                </div>
            </div>
            <Link to="/Result">
                <Button className={className.next}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </Button>
            </Link>
        </div>
    );
}