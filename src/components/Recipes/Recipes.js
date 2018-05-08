import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Recipes.css';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [], modalToggle: false };

        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleAddRecipe = this.handleAddRecipe.bind(this);        
    }

    componentWillMount() {
        this.setState((props) => {
            return props.recipes = [
                {
                    name: "Peanut Butter and Jelly Sandwich",
                    ingredients: ["Peanut Butter", "Jelly", "Bread Loaf"],
                    notes: "Get two slices of bread toasted and slab some pb & j."
                },
                {
                    name: "Tuna Sandwich",
                    ingredients: ["Tuna", "Mayo", "Bread Loaf"],
                    notes: "tuna tonight"
                },
                {
                    name: "Rice and Beans",
                    ingredients: ["Rice", "Jelly", "Bread Loaf"],
                    notes: "Get two slices of bread toasted and slab some pb & j."
                }
            ]
        })
    }

    handleAddRecipe() {
        // return this.setState(prevState => ({recipes: prevState.recipes.push({
        //     name: recipeName,
        //     Ingredient: recipeIngredient,
        //     notes: recipeNote
        // })}))
            
    }

    handleToggleModal(){
        return this.setState(prevState => ({modalToggle: !prevState.modalToggle}));
    }

    render() {
        return <div>
            <ul className="recipeList">
              {this.state.recipes.map(recipe => (
                <li key={this.state.recipes.indexOf(recipe)}>
                  {recipe.name}
                  <br />
                  <ul>
                    {recipe.ingredients.map(ingredient => (
                      <li key={recipe.ingredients.indexOf(ingredient)}>
                        {ingredient + " "}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <ReactModal isOpen={this.state.modalToggle} ariaHideApp={false}>
              <form onSubmit={this.handleAddRecipe}>
                <input type="text" name="recipeName" placeholder="Recipe Name.." />
                <input type="text" name="recipeIngredient" placeholder="Ingredient.." />
                <input type="text" name="recipeNote" placeholder="Notes.." />
                <button type="submit">Add recipe</button>
              </form>
              <button onClick={this.handleToggleModal}>X</button>
            </ReactModal>

            <button onClick={this.handleToggleModal}>Add</button>
          </div>;
  }
};
