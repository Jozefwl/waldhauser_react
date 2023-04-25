import "./AboutMe.css";
import Blue from "../images/blue.png";
import Cyan from "../images/cyan.png";
import Purple from "../images/purple.png";
import Pink from "../images/pink.png";
import Red from "../images/red.png";
import Orange from "../images/orange.png";
import Yellow from "../images/yellow.png";
import Green from "../images/green.png";

const photos = [Blue, Cyan, Purple, Pink, Red, Orange, Yellow, Green];

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
      <div className="mobilebox">
        <p>Hello, I'm</p>
        <h4>Jozef Waldhauser</h4>
        <p>Student at Unicorn University, Prague</p>
      </div>
      <div className="photomobile">
        <img
          alt="profile_picture"
          width="285%"
          height="285%"
          src={String(photo.url)}
        ></img>
      </div>
    </div>
  );
};

export default Aboutbox;
