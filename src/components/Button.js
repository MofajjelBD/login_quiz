import classN from '../styles/button.module.css';

export default function Button({ className, children }) {
    return (
        <button className={`${classN.button} ${className}`}>
            {children}
        </button>
    );
}