import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js';
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: [],
      restaurants: [],
      restaurantsLoaded: false
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
  getCuisines = (cityId) =>  {
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
  getRestaurants = (cityId, cuisineIds = [], limit = 20) => {
    const cuisines = cuisineIds.join(',');
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&count=${limit}&entity_type=city&cuisines=${cuisines}`, {
      headers: {
        "user-key": "8296f931336b95ff78fc964b650c6c45"
      }
    });
  }

  /**
   * Get the value of the selected cuisine in dropdown
   * 
   * @param {e} event 
   */

  selectHandler = (e) => {
    const cuisineId = e.target.value;
    this.getRestaurants(280, [cuisineId])
    .then(res =>  res.json())
    .then(data => {
      this.setState({restaurants: data.restaurants.map(r => r.restaurant)})
      console.log("restaurants", this.state.restaurants);
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant + route finder in Santander</h1>
        <p>Waar heb je trek in vandaag?</p>
        <select name="cuisine" onChange={this.selectHandler}>
          {this.state.cuisines.map((cuisine) => {
            return <option value={cuisine.cuisine.cuisine_id}>{cuisine.cuisine.cuisine_name}</option>
          })}
        </select>
          <h1>Getoonde restaurants:</h1>
          {this.state.restaurants.map((restaurant) => {
            return (
            <div>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.location.address}</p>
              <button type="submit" className="btn btn-primary">Bereken route</button>
              <br />
              <br />
            </div>
            )
          })}
          </div>  
    );
  }
}

export default App;