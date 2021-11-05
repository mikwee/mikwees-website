import './App.css';
import {AwesomeButton} from 'react-awesome-button';
import FacebookStyle from './styles/facebook.scss';
import data from './roots.json'

function App() {
  const socialTypes = ["facebook", "instagram", "twitter", "github", "youtube", "linkedin", "pinterest", "messenger", "whatsapp"];

  return (
    <div className="App">
      <h1 id="title">{data.title}</h1>
      <div id="container">
        <AwesomeButton className="roots" cssModule={FacebookStyle} type="primary">Facebook</AwesomeButton>
        {/*{data.links.map((rootDetail, index)=>{
          if(rootDetail.type == "facebook") {
            res = <AwesomeButton className="roots"></AwesomeButton>
          }
          else if (rootDetail.type === "basic") {
            res = 
          }
          else {
            // throw "One of your roots has an unrecognized type. Check out the documentation for the supported types.";
          }
          return res;
        })}*/}
      </div>
    </div>
  );
}

export default App;
