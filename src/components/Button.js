import classN from '../styles/button.module.css';

export default function Button({ className, children }) {
    return (
        <div className={`${classN.button} ${className}`}>
            {children}
        </div>
    );
}