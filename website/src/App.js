import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import AddCocktail from './components/AddCocktail/AddCocktail';

function App() {
  return (
    <div>
    <div className="App">
      <h1 className="App__header">Cocktail recipes</h1>
      <Search />
    </div>

    <div className="AddCocktail">
    <h1 className="AddCocktail__header">Add your own cocktail</h1>
      <AddCocktail />
    </div>
    </div>

  );
}

export default App;
