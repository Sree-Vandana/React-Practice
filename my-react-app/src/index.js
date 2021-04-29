import React from 'react';
import ReactDOM from 'react-dom';

let nameSentance = (name) => {
  return "My name is " + name
}

const name = 'Sree Vandana'
const element = (<div id="nameIntro">
                    <h1 className={name}>Hello, {nameSentance(name)}</h1>
                  </div>);

ReactDOM.render(
  element, 
  document.getElementById('root'))





//   From cart .js file 1st sample ConvolverNode
//   import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));