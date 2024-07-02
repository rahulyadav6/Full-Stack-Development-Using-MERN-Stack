import './App.css';

import {Component} from "react"

class App extends Component{
  name = "Rahul";
  render(){
    return(
      <div>
        <h1>This is {this.name}!</h1>
      </div>
    );
  }
}

export default App;
