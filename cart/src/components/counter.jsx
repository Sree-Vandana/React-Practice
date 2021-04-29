import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value : this.props.counter.value,
  // };

  // handleIncrement = (product) => {
  //   console.log("++ click value ", product);
  //   this.setState({ value: this.state.value + 1});
  // }

  // handleDelete = (product) => {
  //   console.log("-- click value ", product);
  //   this.setState({ value: this.state.value - 1});
  // }

  render() {
    return (  
      <div>
        <h4>Counter #{this.props.counter.id} </h4>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
