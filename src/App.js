import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: []
    };
  }

  componentDidMount() {
    this.getCuisines(280)
      .then(res =>  res.json())
      .then(data => {
        this.setState({ cuisines : data.cuisines })
        console.log("cuisines", this.state.cuisines)
      });
  }

  search(cuisineId) {
    this.getRestaurants(280, [cuisineId])
  }

  /**
   * Get all cuisines for the given city ID.
   * 
   * @param  {number} cityId
   * @return {Promise}
   */
  getCuisines(cityId) {
    return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=" + cityId, {
      headers: {
        "user-key": "8296f931336b95ff78fc964b650c6c45"
      }
    });
  }

  /**
   * Get all restaurants for the gibven criteria.
   * 
   * @param {number} cityId 
   * @param {array} cuisineIds 
   * @param {number} limit 
   */
  getRestaurants(cityId, cuisineIds = [], limit = 20) {
    const cuisines = cuisineIds.join(',');

    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&count=${limit}&cuisines=${cuisines}`, {
      headers: {
        "user-key": "8296f931336b95ff78fc964b650c6c45"
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant + route finder in Santander</h1>
<<<<<<< HEAD
        <p>Waar heb je trek in vandaag?</p>
        <select name="cuisine">
          {this.state.cuisines.map((cuisine) => {
            return <option value={cuisine.cuisine.cuisine_id}>{cuisine.cuisine.cuisine_name}</option>
          })}
        </select>
=======
        <Dropdown></Dropdown>
        <Button/>
>>>>>>> master
      </div>
    );
  }
}

export default App;