import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <span><h1>New York Times Article Scrubber</h1></span>
          <span><h3>Search for and annotate articles of interest!</h3></span>
        </nav>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
