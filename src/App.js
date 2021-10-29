import "./App.css";
//import "./key";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [heathLabel, setHealthLabel] = useState("vegan");

	const YOUR_APP_ID = "e1247d6a";
	const YOUR_APP_KEY = "e26a928a7aeb202c8ff87c16dff2ece1";

	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${heathLabel}`;

	async function getRecipes() {
		const result = await Axios.get(url);
		setRecipes(result.data.hits);
		console.log(result.data);
	}
	const onsubmit = (e) => {
		e.preventDefault();
		getRecipes();
	};
	return (
		<div className="app">
			<h1>Lolas Recipes🍔</h1>
			<form className="app__searchForm" onSubmit={onsubmit}>
				<input
					type="text"
					className="app__input"
					placeholder="enter ingredient"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<input
					className="app__submit"
					type="submit"
					value="search"
				></input>
				<select className="app__healthLabels">
					<option onClick={() => setHealthLabel("vegan")}>
						Vegan
					</option>
					<option onClick={() => setHealthLabel("vegetarian")}>
						vegetarian
					</option>
					<option onClick={() => setHealthLabel("paleo")}>
						paleo
					</option>
					<option onClick={() => setHealthLabel("dairy-free")}>
						dairy-free
					</option>
					<option onClick={() => setHealthLabel("gluten-free")}>
						gluten-free
					</option>
					<option onClick={() => setHealthLabel("wheat-free")}>
						wheat-free
					</option>
					<option onClick={() => setHealthLabel("fat-free")}>
						fat-free
					</option>
					<option onClick={() => setHealthLabel("low-sugar")}>
						low-sugar
					</option>
					<option onClick={() => setHealthLabel("egg-free")}>
						egg-free
					</option>
					<option onClick={() => setHealthLabel("peanut-free")}>
						peanut-free
					</option>
					<option onClick={() => setHealthLabel("tree-nut-free")}>
						tree-nut-free
					</option>
					<option onClick={() => setHealthLabel("soy-free")}>
						soy-free
					</option>
					<option onClick={() => setHealthLabel("fish-free")}>
						fish-free
					</option>
					<option onClick={() => setHealthLabel("shellfish-free")}>
						shellfish-free
					</option>
				</select>
			</form>
			<div className="app__recipes">
				{recipes.map((recipe) => {
					return <RecipeTile recipe={recipe} />;
				})}
			</div>
		</div>
	);
}

export default App;
