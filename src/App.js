import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index'
import Show from './pages/show'
import Battle from './pages/battle'
import Favorite from './pages/favorite'
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
         <Route 
            exact
            path="/"
            component={Index}/>
         <Route 
            exact
            path="/pokemons/:id"
            component={Show}/>
          <Route 
            exact 
            path="/pokemons/:id/battle"
            component={Battle}/>
          <Route
            exact
            path="/battle"
            component={Battle}
          />
          <Route 
            exact
            path="/favorite"
            component={Favorite}
          />
        </Switch>
        
      </div>  
    </BrowserRouter>

  );
}
export default App;