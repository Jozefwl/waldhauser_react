import "./Socialsbar.css";
import github from "../logo/github.png";
import linkedin from "../logo/linkedin.png";
import youtube from "../logo/youtube.png";

const Socialsbar = () => {
  return (
    <div className="socialsbar">
      <a
        href="https://www.linkedin.com/in/jozef-waldhauser-337779220/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">
          <img width="40px" height="40px" src={linkedin} alt="Linkedin"></img>
        </button>
      </a>

      <a
        href="https://www.youtube.com/channel/UCpAI1PeZgrrca3H8JqOdMBQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button" id="red">
          <img width="40px" height="40px" src={youtube} alt="YouTube"></img>
        </button>
      </a>

      <a
        href="https://github.com/Jozefwl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button" id="grey">
          <img width="40px" height="40px" src={github} alt="GitHub"></img>
        </button>
      </a>
    </div>
  );
};

export default Socialsbar;
