import React, { Component } from 'react';
import './App.css';
import { recipes } from './setup-files/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: recipes,
		url:
			'https://www.food2fork.com/api/search?key=af1783108a297c36a5450499e6ff452b'
	};

	// async getRecipes() {
	// 	try {
	// 		const data = await fetch(this.state.url);
	// 		const jsonData = await data.json();
	// 		this.setState({ recipes: jsonData.recipes });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// componentDidMount() {
	// 	this.getRecipes();
	// }

	render() {
		// console.log(this.state.recipes);
		return (
			<>
				<RecipeList recipes={this.state.recipes} />
				<RecipeDetails />
			</>
		);
	}
}

export default App;
