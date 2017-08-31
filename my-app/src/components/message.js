import React from 'react';
import '../index.css';

const Message = ({message, isRead, read, isSelected, selected, isLabelled, labels, subject, isStarred, starred}) => {
    return (
      <div className={`row message ${isRead(read)} ${isSelected(selected)}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${isStarred(starred)}`}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {isLabelled(labels)}
          <a href="#">
            {subject}
          </a>
        </div>

      </div>
    );
}

export default Message;
