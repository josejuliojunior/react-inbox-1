import React, { Component } from 'react';
import Toolbar from './components/Toolbar.js';
import Messages from './components/Messages.js'
import data from './data/messages.js';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={messages:data}
  }
  isRead(read) {
    return read ? 'read' : 'unread';
  }
  isSelected(selected) {
    return selected ? 'selected' : '';
  }
  isStarred(starred) {
    return starred ? 'fa-star' : 'fa-star-o';
  }
  isLabelled(labels) {
    return labels.map((label, i) => <span key={i} className="label label-warning">{label}</span>)
  }
  render() {
    return (
      <div className="container">
        <header>
          <nav>
            <Toolbar />
          </nav>
        </header>
        <main>
          <Messages messages={data}
                    isRead={this.isRead.bind(this)}
                    isSelected={this.isSelected.bind(this)}
                    isStarred={this.isStarred.bind(this)}
                    isLabelled={this.isLabelled.bind(this)} />
        </main>
      </div>
    );
  }
}

export default App;
