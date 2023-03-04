export default function Checkbox({ className, txt, ...rest }) {
    return (
        <label className={className}>
            <input type="checkbox" {...rest} />
            <span> {txt} </span>
        </label>
    );
}