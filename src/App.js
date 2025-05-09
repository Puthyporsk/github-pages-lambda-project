import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  let [abc, setabc] = useState([]);
  const buttonClickHandler = async () => {
    console.log('button clicked');
    const response = await fetch("https://1d3334xzx1.execute-api.us-east-2.amazonaws.com/default/rest-test");
    let text = await response.json();
    console.log(response, text);
    setabc(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test of Github Pages integration with AWS Lambda. PRODUCTION BRANCH, hidden sourcemap
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => buttonClickHandler()}>
            Click Me!
          </button>
        {abc.length === 0 ? (
          <p>Placeholder</p>
        ) : (
          abc.map(a => (
          
            <p>{a.first_name}</p>
          
          ))
        )}
      </header>
    </div>
  );
}

export default App;
