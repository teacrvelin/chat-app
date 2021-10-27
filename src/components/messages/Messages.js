import React, { Component } from "react";

class Messages extends Component {
  renderMessage(message, key) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;

    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li key={key} className={className}>
        <span className="avatar" style={{ backgroundColor: member.clientData.color }} />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m, i) => this.renderMessage(m, i))}
      </ul>
    );
  }
}

export default Messages;
