import React, { Component } from 'react';


class LifecycleItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {count: 0};
  }

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log('Mounting is Done!!!!!!!')
    console.log('======================')
  }
  componentWillReceiveProps(nextProps) {
    this.setState({count: nextProps.count})
    console.log('props count:' + nextProps.count)
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('state count:' + nextState.count)
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log('Updating is Done!!!!!!!')
    console.log('======================')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    console.log('Unmounting is Done!!!!!!!')
    console.log('======================')
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick} >Change state</button>
      </div>
    );
  }
}

export default LifecycleItem