import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/producsts';
import Message from './components/Message';
import HOC from './components/messagesHOC'

function App() {
  return (
    <div className="App">
      <HOC>      <Products></Products>
          {["error", "success", "info"].map(messageType => (
      <div key={messageType}>
        <button
          onClick={() => alert(`It's ${messageType}`)}
        >
          {`Show ${messageType}`}
        </button>
    </div>))}
    </HOC>

    </div>
  );
}

export default App;
