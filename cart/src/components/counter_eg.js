import React, { Component } from "react";

class Counter extends Component {
  state = {
    count : 0,
    tags : ['tag1', 'tag2', 'tag3'],
  };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold",
  // };

  constructor(){
    // need to call super first
    super();
    // in constructor we have access to "this"
    this.handleIncrement = this.handleIncrement.bind(this);  // this method retuens a new function.
    // by doing this; no matter how we call the function, this will reffer to counter object.
  }
  //instead of calling constructor in every module anothet method is to use arrow function
  // => fn inherit this object
  // handleIncrement = () => {
  //   console.log("++ value ", this);
  // }

  handleIncrement(){
    //simply pass areference instread of calling it as a function
    console.log("++ click value");
    // cannot use "this" here
    // obj.method() --> this refferes to obj
    // method() --> call as stand alone method, "this" reffers to window obj; but when called in strict mode "this referes to undefined"
    // to get around this; use "binder" --> bind method
    this.state.count ++; // actually it is being incremented but this womt work; bz react dont know that it is being updated and does not change the view
    // to maeke this work use one of the methods that we inherit from base component
    // use setState()
  }

  // to pass argument to handle Event method
  doHandleIncrement = () => {
    this.handleIncrement({id: 1});
  } // and pass onClick={this.doHandleIncrement}

  renderList(){
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
  }

  render() {
    return (  // we can use <div> or <React.Fragment>
      <React.Fragment> 
        <span className={this.getClasses()}>{this.formatCount()}</span>
        {/* <span style={ this.styles } className="badge badge-primary m-2">{this.formatCount()}</span>
        <span style={ { fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && 'Please enetr tags'}
        {this.renderList()}
      </React.Fragment>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    // so instead of repeating "this.state.count" we do "object destructure"

    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
    // can also return jsx expression
    // return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>;
  }
}

export default Counter;
