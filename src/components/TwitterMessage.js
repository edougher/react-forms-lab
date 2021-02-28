import React from "react";

class TwitterMessage extends React.Component {
  //count = this.props.maxChars
  charsRemaining = 0
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      message: event.target.value
    })
    this.charsRemaining = this.props.maxChars - event.target.value.length
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleOnChange(event)} type="text" name="message" id="message" />
        <h3>Characters remaining: {this.charsRemaining}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
