import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from './recipe'






const App = () => {

  const APP_ID = "506aee60";
  const APP_KEY = "065124c86b878ef960895bdf6f2ee83f";

 const [recipes, setRecipes] = useState([]);
  
 const[search, setSearch] = useState('chicken');

 const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
 

};

 const[query, setQuery] = useState('chicken');
    useEffect( () => {
        getRecipes();
        // eslint-disable-next-line
  }, [query]);

 



const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

return (
  <div className="App">
    
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit"><i class="fas fa-search"></i></button>
    </form> 
    <div classNme="recipes">
  {recipes.map(recipe => (
    <Recipe 
    key={recipe.recipe.label}
    title={recipe.recipe.label}
    image = {recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}
    />
  ))}
  </div>
  </div>
);
}


export default App;
