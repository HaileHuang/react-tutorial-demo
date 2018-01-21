import React, { Component } from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'red'};
  }

  changeBackgroundColor = () => {
    this.setState({
      backgroundColor: ['red', 'yellow', 'blue'][Date.now() % 3],
    })
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.backgroundColor}}>
        <h1>Child parent Demo</h1>
        <Child clickFunc={this.changeBackgroundColor} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickFunc}>Change backgroundColor</button>
      </div>
    );
  }
}

export default Parent