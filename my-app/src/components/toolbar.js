import React, { Component } from 'react';
import AllMessages from './ToolbarAllMessages.js';
import SomeMessages from './ToolbarSomeMessages.js';
import NoMessages from './ToolbarNoMessages.js';
import WithComposeButton from './ToolbarComposeButton.js';
import '../index.css';

class Toolbar extends Component {
  render () {
    return (
      <WithComposeButton />
    );
  }
}



export default Toolbar;
