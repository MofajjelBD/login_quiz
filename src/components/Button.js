import classN from '../styles/button.module.css';

export default function Button({ children }) {
    return (
        <div className={classN.button}>
            <span>{children}</span>
        </div>
    );
}