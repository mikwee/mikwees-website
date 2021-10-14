import logo from './logo.svg';
import './App.css';
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import data from './roots.json'

function App() {
  return (
    <div className="App">
      <div id="bg"></div>
      <h1 id="title">{data.title}</h1>
      {}
    </div>
  );
}

export default App;
