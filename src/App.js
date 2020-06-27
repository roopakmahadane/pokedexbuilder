import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Layout from './layout/layout'
import PokemonDetail from './component/PokemonDetail'
import AddNewPokemon from './component/AddNewPokemon'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route path="/" exact component={Layout}/>
          <Route path="/pokemon/:id" component={PokemonDetail}/>
          <Route path="/new" component={AddNewPokemon}/>
        </Switch> 
      </div>
    </Router>
   
  );
}

export default App;
