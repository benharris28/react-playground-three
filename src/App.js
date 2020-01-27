import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
      </div>
    
    );
  }
}

export default App;