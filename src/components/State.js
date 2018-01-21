import React, { Component } from 'react';

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1})
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <h1>State Demo</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick} >Add</button>
      </div>
    );
  }
}

export default State