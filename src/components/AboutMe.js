import "./AboutMe.css";
import Blue from "../images/blue.png";
import Cyan from "../images/cyan.png";
import Purple from "../images/purple.png";
import Pink from "../images/pink.png";
import Red from "../images/red.png";
import Orange from "../images/orange.png";
import Yellow from "../images/yellow.png";
import Green from "../images/green.png";

const photos = [
    Blue,
    Cyan,
    Purple,
    Pink,
    Red,
    Orange,
    Yellow,
    Green
];

let random = (array) => {
  let max = array.length;
  let output = array[Math.floor(Math.random() * max)];
  return output;
};

let photo = {
  url: random(photos),
};

//
const Aboutbox = () => {
  return (
    <div className="wrapper">
    <div className="aboutbox">
        <p>Hello, I'm</p>
        <h3>Jozef Waldhauser</h3>
        <p>Student at Unicorn University, Prague</p>
        
      
    </div>
    <div className="photo">
        
        <img alt="profile_picture" width="100%" height="100%" src={String(photo.url)}></img>
      </div>
    </div>
  );
};

export default Aboutbox;
