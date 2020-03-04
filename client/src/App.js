// //entry point to our front end app"
import React, { Component } from "react";
import './App.scss';
import Home from './Components/Home'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
       <Home/>
     </div>
    );
  }
}

export default App;