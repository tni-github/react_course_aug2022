import React, { useEffect, useState } from 'react';
import './App.css';
import './components/style.css'
import Message from './components/Message';
import UserMessage from './components/UserMessage';
import Bot from './components/Bot';
import History from './components/History';
import Form from './components/Form';

const textMessage = 'First task';

function App(props) {
  let [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({});

  const handleChange = (event) => {
    setMessage({ author: "user", text: event.target.value });
  };

  const addMessage = () => {
    setMessageList(messageList.concat({ message }));
    setMessage({ author: "", text: "" });
    //alert("Нельзя отправлять пустое сообщение! Введите текст и повторите отправку!")
  };

  const botObject = {
    name: "Bot",
    text: "Please wait, operator will come soon..."
  };

  useEffect(
    () => {
      messageList.map((message) => {
        return (
          <>
            <UserMessage author={message.author} text={message.text} />
            <Bot name={botObject.name} text={botObject.text} />
          </>
        );
      });
    }, [messageList, botObject.name, botObject.text])

  console.log('message: ', message);
  console.log('messageList', messageList);

  return (
    <div className="App">
      <header className="App__header">
        My First React App
        <h3 className="App__header_subtext">Hello, {props.name}!</h3>
        <Message messageText={textMessage} />

        <Form onChange={handleChange} text={message.text} onClick={addMessage} />

        {/* <form className="form">
          <label>Текст сообщения: </label>
          <input
            className="form__message"
            type="text"
            placeholder="Введите сообщение"
            onChange={handleChange}
          />
          <div>Ниже будет полный текст cообщения:</div>
          <div className="message__fulltext">{message.text}</div>
          <button type="submit" onClick={addMessage}>Отправить сообщение</button>
        </form> */}

        <History>
          <UserMessage />
          <Bot />
        </History>
      </header>
    </div>
  )
}

export default App;