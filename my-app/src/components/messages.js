import React from 'react';
import Message from '../components/Message.js';
import data from '../data/messages.js';

const Messages = ({messages}) => (
  <div>
    { messages.map(message => <Message key={message.id} subject={message.subject}
       read={message.read} starred={message.starred} selected={message.selected} labels={message.labels} /> ) }
  </div>
)

export default Messages;
