export default function Checkbox({ txt, ...rest }) {
    return (
        <label>
            <input type="checkbox" {...rest} />
            <span> {txt} </span>
        </label>
    );
}