import React, { Component } from 'react';

class Parent extends React.Component {

  render() {
    return (
      <div>
        <h1>Parent child Demo</h1>
        <Child content={'Parent child !'}/>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.content}</div>
      </div>
    );
  }
}

export default Parent