/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

import './App.css';
import Message from './Message';

const textMessage = 'First task';

function App(props) {
  return (
    <div className="App">
      <header className="App__header">
        My First React App
        <h3 className="App__header_subtext">Hello, {props.name}!</h3>
        <Message messageText={textMessage} />
      </header>
    </div>
  );
}

export default App;