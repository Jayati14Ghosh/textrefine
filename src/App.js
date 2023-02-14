import React, { Component } from 'react'
import './App.css';
import {Navbar} from './components/Navbar.js';
import {Textform} from './components/Textform.js';
import {About} from './components/About.js';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      bg: "light",
      color: 'dark',
      navbar: 'light'
    }
  }

  lightmode = ()=>{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color ="#403f3f";

    this.setState({
      bg: "light",
      color: 'dark',
      navbar: 'light'
    })
  }

  darkmode = ()=>{
    document.body.style.backgroundColor = "#403f3f";
    document.body.style.color = "#fff";
    this.setState({
      bg: "dark",
      color: 'light',
      navbar: 'dark'
    })
  }


  render(){
    return(
      <>

      <BrowserRouter>
      <Navbar
        title="Textform"
        lightmode={this.lightmode}
        darkmode={this.darkmode}
        bg={this.state.bg}
        color={this.state.color}
        navbar={this.state.navbar}
        />
        <Routes>
         <Route path="/" element={<Textform bg={this.state.bg} color={this.state.color} />} />
         <Route path="/about" element={<About bg={this.state.bg} color={this.state.color} />} />
       </Routes>
      </BrowserRouter>






      </>
    )
  }
}

export default App;
