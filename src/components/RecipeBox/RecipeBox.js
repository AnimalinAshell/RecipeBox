import React, { Component } from 'react';
import './RecipeBox.css';
import Recipes from '../Recipes/Recipes';

export default class RecipeBox extends Component {
  render() {
    return <div>
        <Recipes></Recipes>
      </div>;
  }
};

