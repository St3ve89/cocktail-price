import React, { Component } from 'react'
import { BASE_URL } from '../constant';
import Axios from 'axios';

class AddCocktail extends Component {
  constructor(props) {
    super(props)
    this.input = null;
    this.pushCocktail = this.pushCocktail.bind(this)
  }

  async pushCocktail() {
    try {
      await Axios.post(`${BASE_URL}cocktail`, 
      {
        name: this.input.value
      },
      {
        'Content-Type': 'application/json', 
      })
      this.props.fbi(this.input.value);
    } catch (e) {

    }
  }


  render(){
    return(
      <p>
        <input 
          ref= {e => this.input = e} />
        <button
          onClick={this.pushCocktail}>
          Add </button>
      </p>
    )
  }
}

export default AddCocktail;