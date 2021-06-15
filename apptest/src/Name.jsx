// import React, { Component } from "react";

export default function Name(props) {
  return (
    <div>
      <form id="form" action="#" onSubmit={props.doSomething}>
        {/* <caption className="form-head"> */}
        <h4>Game of Thrones Charecter Info</h4>
        {/* </caption> */}

        <div className="charName">
          <label for="charName">
            <b>Charecter</b>
          </label>
          <input
            type="text"
            name="charName"
            id="charName"
            className="input-box"
            required
          />
          <input type="submit" value="Submit" id="submit" className="button" />
        </div>
      </form>

      <div></div>
    </div>
  );
}
