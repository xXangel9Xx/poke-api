import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Nav from './components/nav'
import Index from './pages/index'
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
        </Switch>
        
      </div>  
    </BrowserRouter>

  );
}

export default App;


//import logo from './logo.svg';
/*     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/