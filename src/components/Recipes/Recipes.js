import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Recipes.css';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [], modalToggle: false };

        this.handleToggleModal = this.handleToggleModal.bind(this);
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
              <form>
                <input type="text" placeholder="Recipe Name.." />
                <input type="text" placeholder="Ingredient.." />
                <input type="text" placeholder="Notes.." />
                <button>Add recipe</button>
              </form>
              <button onClick={this.handleToggleModal}>X</button>
            </ReactModal>

            <button onClick={this.handleToggleModal}>Add</button>
          </div>;
  }
};
