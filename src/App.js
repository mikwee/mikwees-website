import './App.css';
import {AwesomeButton, AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyle from "react-awesome-button/dist/styles.css";
import data from './roots.json'

function App() {
  var res;
  const socialTypes = ["facebook", "instagram", "twitter", "github", "youtube", "linkedin", "pinterest", "messenger", "whatsapp"];

  return (
    <div className="App">
      <h1 id="title">{data.title}</h1>
      {data.links.map((rootDetail, index)=>{
        if(socialTypes.includes(rootDetail.type)) {
          res = <button className="roots">{rootDetail.text}</button>
        }
        else if (rootDetail.type === "basic") {
          res = <button className="roots">{rootDetail.text}</button>
        }
        else {
          // throw "One of your roots has an unrecognized type. Check out the documentation for the supported types.";
        }
        return res;
      })}
    </div>
  );
}

export default App;
