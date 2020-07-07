import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav"
import { Switch , Route } from "react-router-dom"

import Home from "./Components/Sections/Home/Home"
import About from "./Components/Sections/About/About"
import Services from "./Components/Sections/Services/Services"
import Skillz from "./Components/Sections/Skills/Skill"
import Contact from "./Components/Sections/Contacts/Contact"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
        <Route path='/skills' component={Skillz}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
