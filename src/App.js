import logo from './logo.svg';
import './App.css';
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import roots from './roots.json'

function App() {
  return (
    <div className="App">
      <h1 id="title">{roots.title}</h1>
    </div>
  );
}

export default App;
