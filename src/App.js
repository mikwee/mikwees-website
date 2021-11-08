import './App.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Instagram, Twitter, Github, Youtube, Linkedin, Pinterest, Reddit } from 'react-bootstrap-icons';
import Tumblr from './icons/Tumblr Icon.svg';
import './styles/roots.scss';
import data from './roots.json'

function App() {
  var res;

  return (
    <div className="App">
      <h1 id="title">{data.title}</h1>
      <div id="container">
        <ButtonGroup vertical>
          {data.links.map((rootDetail, index)=>{
            if(rootDetail.type === "facebook") {
              res = <Button id="facebook" variant="primary" href={rootDetail.url}><Facebook/> {rootDetail.text}</Button>
            }
            else if(rootDetail.type === "instagram") {
              res = <Button id="instagram" variant="primary" href={rootDetail.url}><Instagram/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "twitter") {
              res = <Button id="twitter" variant="primary" href={rootDetail.url}><Twitter/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "github") {
              res = <Button id="github" variant="primary" href={rootDetail.url}><Github/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "youtube") {
              res = <Button id="youtube" variant="primary" href={rootDetail.url}><Youtube/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "linkedin") {
              res = <Button id="linkedin" variant="primary" href={rootDetail.url}><Linkedin/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "pinterest") {
              res = <Button id="pinterest" variant="primary" href={rootDetail.url}><Pinterest/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "tumblr") {
              res = <Button id="tumblr" variant="primary" href={rootDetail.url}>{rootDetail.text}</Button>
            }
            else if (rootDetail.type === "reddit") {
              res = <Button id="reddit" variant="primary" href={rootDetail.url}><Reddit/> {rootDetail.text}</Button>
            }
            else if (rootDetail.type === "basic") {
              res = <Button variant="primary" href={rootDetail.url}>{rootDetail.text}</Button>
            }
            else {
              // throw "One of your roots has an unrecognized type. Check out the documentation for the supported types.";
            }
            return res;
          })}
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
