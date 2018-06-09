import React, { Component } from 'react';
import AddCocktail from './add-cocktail';
import { BASE_URL } from './constant';
import axios from 'axios'


class Cocktail extends Component {

  state = {
    cocktail:[]
  }

  async getCocktail() {
    let {data} = await axios.get(`${BASE_URL}cocktail`)
    this.setState({cocktail: data})
  }
  
  componentDidMount(){
    this.getCocktail()

  }

  addCocktailToState = (something) => {
    console.log(`awesome ${something}`)
    this.setState({
      cocktail: [...this.state.cocktail, {name: something, id: this.state.cocktail.length +1}]
    })
    console.log(this.state.cocktail)
  }

  renderCocktail = () => {
    return this
      .state
      .cocktail
      .map((cocktail, key) =>
        <p key={key}>{cocktail.name}</p>
      )
  }
  
  render(){
    return(
      <div>
        <div>{this.renderCocktail()}</div>,
        <AddCocktail
          fbi={this.addCocktailToState} />
      </div>
    )
  }
}

export default Cocktail;