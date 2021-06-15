import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "737acc6d8amshdf190f9926e35e4p119829jsna077915e4884",
        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(resp => console.log(resp))
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return(<div></div>);
  }
}

export default App;