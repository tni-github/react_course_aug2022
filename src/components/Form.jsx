
import './style.css';

function Form(props) {

    return (
        <form className="form">
            <label>Текст сообщения: </label>
            <input
                className="form__message"
                type="text"
                placeholder="Введите сообщение"
                onChange={props.onChange}
            />
            <div>Ниже будет полный текст cообщения:</div>
            <div className="message__fulltext">{props.text}</div>
            <button type="submit" onClick={props.onClick}>Отправить сообщение</button>
        </form>

    )

}

export default Form;