// //entry point to our front end app"
import React, { Component } from "react";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
       <div class="g-signin2" data-onsuccess="onSignIn"></div>
     </div>
    );
  }
}

export default App;