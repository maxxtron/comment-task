import React, { Component } from 'react';
import './App.css';
import Items from "./components/items/Items";
import Comments from "./components/comments/Comments";

class App extends Component {
  render() {
    return (
      <div className="container">
          <Items/>
          <Comments/>
      </div>
    );
  }
}

export default App;
