import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';

const API = "https://developers.zomato.com/api/v2.1/cities?q=Santander"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityId: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ cityId: data.cityId }));
  }

  render() {
    return (
      <div>
        <h1>Restaurant + route finder in Santander</h1>
        <Dropdown></Dropdown>
      </div>
    );
  }
}

export default App;