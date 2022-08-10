import './style.css';

function Bot(props) {
    return (
        <>
            <div>{props.name} answers: <span>{props.text}</span></div>
        </>
    )
}

export default Bot;