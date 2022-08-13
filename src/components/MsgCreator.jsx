import './style.css'

function MsgCreator(props) {

    return (
        <>
            {
                props.messageList.map((obj) => {
                    if (obj.author === "user") {
                        return (
                            <div className="message__user">
                                <span>{obj.author} пишет: </span>
                                <span>{obj.text}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div className="message__bot">
                                <span>{obj.author} отвечает: </span>
                                <span>{obj.text}</span>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default MsgCreator;