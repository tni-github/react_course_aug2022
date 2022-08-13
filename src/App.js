import React, { useEffect, useState } from 'react';
import './App.css';
import './components/style.css';
import Message from './components/Message'
import MsgCreator from './components/MsgCreator';
import Form from './components/Form';

const textMessage = 'First task';
let timer = null;

const botMessage = { author: "bot", text: "Please wait, operator will come soon..." };

function App(props) {
  const [messageList, setMessageList] = useState([]);
  let [message, setMessage] = useState({ author: "", text: "" });

  const createMessage = (event) => {
    setMessage({ author: "user", text: event.target.value });
  }

  const updateMessageList = () => {
    if (message.text === "" || message.text === " " || message.text === "  ") {
      alert('Нельзя отправить пустое сообщение! Добавьте текст!');
    } else {
      setMessageList(messageList.concat(message));
      setMessage({ author: "", text: "" });
    }
  }

  useEffect(() => {
    timer = setTimeout(
      () => {
        if (messageList.length !== 0 && messageList[messageList.length - 1].author === "user") { setMessageList(messageList.concat(botMessage)) }
        else { clearTimeout(timer) }
      }, 1500);
  }, [messageList]);

  console.log('список сообщений: ', messageList);
  console.log('сообщение: ', message);

  return (
    <div className="App">
      <header className="App__header">
        My First React App
        <h3 className="App__header_subtext">Hello, {props.name}!</h3>
        <Message messageText={textMessage} />
      </header>

      <Form
        onClick={updateMessageList}
        onChange={createMessage}
      >
      </Form>

      <MsgCreator messageList={messageList} />
    </div >
  );
}

export default App; 