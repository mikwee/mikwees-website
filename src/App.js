import './App.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube, BsLinkedin, BsPinterest, BsReddit } from 'react-icons/bs';
import Tumblr from './icons/Tumblr';
import './styles/roots.scss';
import data from './roots.json'

function App() {
  var res;

  return (
    <div className="App">
      <h1 id="title">{data.title}</h1>
      <div id="container">
        {data.links.map((rootDetail, index)=>{
          if(rootDetail.type === "facebook") {
            res = <Button className="roots" id="facebook" variant="primary" href={rootDetail.url}><BsFacebook/> {rootDetail.text}</Button>
          }
          else if(rootDetail.type === "instagram") {
            res = <Button className="roots" id="instagram" variant="primary" href={rootDetail.url}><BsInstagram/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "twitter") {
            res = <Button className="roots" id="twitter" variant="primary" href={rootDetail.url}><BsTwitter/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "github") {
            res = <Button className="roots" id="github" variant="primary" href={rootDetail.url}><BsGithub/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "youtube") {
            res = <Button className="roots" id="youtube" variant="primary" href={rootDetail.url}><BsYoutube/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "linkedin") {
            res = <Button className="roots" id="linkedin" variant="primary" href={rootDetail.url}><BsLinkedin/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "pinterest") {
            res = <Button className="roots" id="pinterest" variant="primary" href={rootDetail.url}><BsPinterest/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "tumblr") {
            res = <Button className="roots" id="tumblr" variant="primary" href={rootDetail.url}><Tumblr viewBox="250 0 300 200" width="32px" height="32px"/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "reddit") {
            res = <Button className="roots" id="reddit" variant="primary" href={rootDetail.url}><BsReddit/> {rootDetail.text}</Button>
          }
          else if (rootDetail.type === "basic") {
            res = <Button className="roots" variant="primary" href={rootDetail.url}>{rootDetail.text}</Button>
          }
          else {
            // throw "One of your roots has an unrecognized type. Check out the documentation for the supported types.";
          }
          return res;
        })}
      </div>
    </div>
  );
}

export default App;
