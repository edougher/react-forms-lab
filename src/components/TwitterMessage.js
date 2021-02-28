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

  //handleOnChange = (event) => {
  //  this.setState({
  //    message: event.target.value
  //  })
  //  this.charsRemaining = this.props.maxChars - event.target.value.length
  //  
  //}
//
  //render() {
  //  return (
  //    <div>
  //      <strong>Your message:</strong>
  //      <input onChange={event => this.handleOnChange(event)} type="text" name="message" id="message" />
  //      <h3>Characters remaining: {this.charsRemaining}</h3>
  //    </div>
  //  );
  //}

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
