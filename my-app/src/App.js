import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
// import Message from './components/Message.js';
import Messages from './components/Messages.js'
// import data from './data/messages.js';
// import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Toolbar />
          </nav>
        </header>
        <main>
          <Messages />
        </main>
      </div>
    );
  }
}

export default App;
