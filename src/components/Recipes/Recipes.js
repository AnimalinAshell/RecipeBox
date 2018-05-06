import React, { Component } from 'react';
import './Recipes.css';

export default class componentName extends Component {
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
    
    // recipesList() {
    //     return this.state.recipes.map(recipes => {
    //       <li>
    //         <p>{recipes.name}</p>
    //         <p>{recipes.ingredients}</p>
    //         <p>{recipes.notes}</p>
    //       </li>;
    //     });
        
    // }
    
    render() {
        return (
            <div>
                <ul>
                    {this.recipesList}
                </ul>
            </div>
        )
  }
};
