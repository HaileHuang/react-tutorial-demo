import React, { Component } from 'react';

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{id: 1, title: 'item1', checked: false},
              {id: 2, title: 'item2', checked: false},
              {id: 3, title: 'item3', checked: false}]
    };
  }

  handleClick = (item) => {
    this.setState({
      list: this.state.list.map((x) => {
        if (item.id === x.id) {
          return Object.assign({}, x, {checked: !x.checked})
        } else {
          return Object.assign({}, x, {checked: false})
        }
      })
    })  
  }

  render() {
    return (
      <div>
        <h1 style={{backgroundColor: this.state.backgroundColor}} >Child Child Demo</h1>
        {
          this.state.list.map((item, i) => {
            return <CheckItem
                    key={i}
                    item={item}
                    clickFunc={this.handleClick}
                    />
          })
        }
      </div>
    )
  }
}

class CheckItem extends Component {
  render() {
    const { item, clickFunc }= this.props
    return (
      <div>
        <input type="checkbox" checked={item.checked} onChange={clickFunc.bind(this, item)}/>
        <span>{item.title}</span>
      </div>
      
    )
  }
}

export default CheckList