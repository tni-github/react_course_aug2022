import './style.css';

function Message(props) {
    return (
        <div className="Message">
            <h4 className="Message__text">It's: {props.messageText}</h4>
        </div>
    );
}

export default Message;