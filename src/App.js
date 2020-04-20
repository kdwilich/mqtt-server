import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <title></title>
        <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
        <script src="https://assets.shiftr.io/js/mqtt-2.9.0.js"></script>
        <script src="script.js" charset="utf-8"></script>
      </head>
      <body>
        <button id="button">Click Me</button>
      </body>
    </div>
  );
}

export default App;
