import "./Title.css";
import { typeWriter } from "./Typewriter";
import { useEffect } from "react";

const Title = () => {
  useEffect(() => {
    typeWriter();
  });

  return (
    <div className="bluebox">
      <p id="typing"></p>
    </div>
  );
};

export default Title;
