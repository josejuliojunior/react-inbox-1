import React from 'react';
import Message from '../components/Message.js';
import data from '../data/messages.js';

const Messages = ({messages, isRead, isSelected, isStarred, isLabelled}) => (
  <div>
    { messages.map(message => <Message  key={message.id}
                                        messages={ data }
                                        subject={message.subject}
                                        read={message.read}
                                        isRead={isRead}
                                        starred={message.starred}
                                        isStarred={isStarred}
                                        selected={message.selected}
                                        isSelected={isSelected}
                                        labels={message.labels}
                                        isLabelled={isLabelled} /> ) }
  </div>
)

export default Messages;
