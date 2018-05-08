import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Recipes.css';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
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

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.recipes.map((recipe) => (
                        <li key={this.state.recipes.indexOf(recipe)}>
                            {recipe.name} 
                            <br/> 
                            <ul>
                                {
                                    recipe.ingredients.map((ingredient) => (
                                        <li key={recipe.ingredients.indexOf(ingredient)}> 
                                            {
                                                ingredient + " "
                                            } 
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>))
                    }
                </ul>
                
                <button onClick={alert()}></button>
            </div>
        )
  }
};
