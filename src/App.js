import "./App.css";
//import "./key";
import Axios from "axios";

function App() {
	const YOUR_APP_ID = "e1247d6a";
	const YOUR_APP_KEY = "e26a928a7aeb202c8ff87c16dff2ece1";

	const url = `"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"`;

	async function getRecipes() {
		const result = await Axios.get(url);
		console.log(result.data);
	}
	return (
		<div className="app">
			<h1 onClick={getRecipes}>Lolas Recipes</h1>
		</div>
	);
}

export default App;
