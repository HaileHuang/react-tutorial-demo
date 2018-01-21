import React, { Component } from 'react';
import LifecycleItem from './LifecycleItem'

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showLifecycleItem: true,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1})
  }

  changeComponentMountState = () => {
    this.setState({ showLifecycleItem: !this.state.showLifecycleItem})
  }

  render() {
    return (
      <div>
        <h1>Lifecycle Demo</h1>
        <button onClick={this.handleClick} >Change props</button>
        { this.state.showLifecycleItem && <LifecycleItem count={this.state.count} />}
        <button onClick={this.changeComponentMountState} >Change component mount state</button>
      </div>
    );
  }
}

export default Lifecycle