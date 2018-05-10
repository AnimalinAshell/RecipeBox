import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Recipes.css';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // recipes: [], 
            modalToggle: false,
            recipeName: "",
            // recipeIngredient: [],
            recipeNotes: "" 
        };

        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleAddRecipe = this.handleAddRecipe.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);        
                
    }

    componentWillMount() {
        this.setState((prevState) => {
            return prevState.recipes = [
                {
                    name: "Peanut Butter and Jelly Sandwich",
                    // ingredients: ["Peanut Butter", "Jelly", "Bread Loaf"],
                    notes: "Get two slices of bread toasted and slab some pb & j."
                },
                {
                    name: "Tuna Sandwich",
                    // ingredients: ["Tuna", "Mayo", "Bread Loaf"],
                    notes: "tuna tonight"
                },
                {
                    name: "Rice and Beans",
                    // ingredients: ["Rice", "Jelly", "Bread Loaf"],
                    notes: "Get two slices of bread toasted and slab some pb & j."
                }
            ]
        })
    }

    // makes recipe name and recipe notes inputs use react state instead of its default internal state
    handleInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name + " " + value);

        this.setState({
            [name]: value
        }); 
    }

    // might make into a component
    handleInputIngredients(){
        let name = event.target.name;
        let value = event.target.value;
        console.log(name + " " + value);
        this.setState((prevState) => { 
            return {[name]: prevState.recipeIngredient.push(value)};
        });
    }

    // adds recipe to recipe list
    handleAddRecipe(event) {
        event.preventDefault();

        this.setState((prevState) => {
            prevState.recipes.push({
                name: prevState.recipeName,
                // ingredients: prevState.recipeIngredient,
                notes: prevState.recipeNotes
            });
        });    

        this.handleToggleModal();
    }

    // opens/closes modal
    handleToggleModal(){
        this.setState(prevState => ({modalToggle: !prevState.modalToggle}));
    }

    render() {
        return <div>
            <ul>
              {this.state.recipes.map(recipe => (
                <li key={this.state.recipes.indexOf(recipe)}>
                    {recipe.name}
                    <br />
                    {/*<ul>
                        {recipe.ingredients.map(ingredient => (
                            <li key={recipe.ingredients.indexOf(ingredient)}>
                            {ingredient + " "}
                            </li>
                        ))}
                    </ul>*/}
                    {recipe.notes}
                </li>
              ))}
            </ul>

            <ReactModal isOpen={this.state.modalToggle} ariaHideApp={false}>
              <form onSubmit={this.handleAddRecipe}>
                <input type="text" onChange={this.handleInputChange} value={this.state.recipeName} name="recipeName" placeholder="Recipe Name.." />
                {/*<input type="text" onChange={this.handleInputChange} value={this.state.recipeIngredient} name="recipeIngredient" placeholder="Ingredient Name.." />*/}
                <input type="text" onChange={this.handleInputChange} value={this.state.recipeNotes} name="recipeNotes" placeholder="Notes.." />
                <button type="submit">Add recipe</button>
              </form>
              <button onClick={this.handleToggleModal}>X</button>
            </ReactModal>

            <button onClick={this.handleToggleModal}>Add</button>
          </div>;
    }
};
