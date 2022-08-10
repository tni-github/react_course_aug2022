export default function UserMessage(props) {
    return (
        <>
            <div>{props.author}: <span>{props.text}</span></div>
        </>
    )
}