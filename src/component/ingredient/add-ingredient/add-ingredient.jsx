import React from 'react';

const AddIngredient = () => {
  return(
    <div>
      <form>
        <div>
          <label htmlFor="ingredient-name">Name</label>
          <input 
            type="text"
            required
            minLength="3"
            id="ingredient-name"/>
        </div>
        <div>
          <label htmlFor="ingredient-price">Price</label>
          <input 
              type="number"
              min="0.01"
              id="ingredient-price"/>
        </div>
        <div>
          <label htmlFor="ingredient-quantity">Quantity</label>
          <input 
            type="number"
            min="0.01"
            id="ingredient-quantity"/>
        </div>
        <div>
          <label htmlFor="ingredient-measure">Measure</label>
          <select id="ingredient-measure">
            <option value="ml" selected>ml</option>
            <option value="unit">unit</option>
            <option value="gr">gr</option>
          </select>
        </div>
        <div>
          <label htmlFor="ingredient-currency">Currency</label>
          <select id="ingredient-currency">
            <option value="£" selected>£</option>
            <option value="$">$</option>
            <option value="HUF">HUF</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Ingredient</button>
        </div>
      </form>
    </div>
  )
}

export default AddIngredient;