function Form(props) {
    return (
        <>
            <input className="form__input"
                placeholder="Напишите текст сообщения"
                onChange={props.onChange}
            />
            <button className="form__btn"
                type="submit"
                action="#"
                onClick={props.onClick}
            >
                Отправить сообщение
            </button>
        </>
    );
}

export default Form;