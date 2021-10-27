import React, { Component } from "react";

export default class Input extends Component {
  state = {
    text: ""
  };

  handleInputChange = evt => {
    this.setState({ text: evt.target.value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  };

  render() {
    return (
      
        <div className="Input">
          <form onSubmit={s => this.handleFormSubmit(s)}>
            <input
              onChange={c => this.handleInputChange(c)}
              value={this.state.text}
              type="text"
              placeholder="Enter your message and press ENTER"
              autoFocus={true}
            />
            <button>Send</button>
          </form>
        </div>
    
    );
  }
}
