import './App.css';
import { Component } from 'react';
import Main from "./components/mainComponent";
import bg from './assets/images/earthWallpaper.jpg';


class App extends Component{

  render(){
    return(
      <div className="App" style={{ backgroundImage: {bg} }}>
        <Main />
      </div>
    );
  }
}

export default App;
