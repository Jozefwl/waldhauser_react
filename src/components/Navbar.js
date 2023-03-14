import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <Button text="ABOUT" link="about.html"></Button>
      <Button text="CONTACT" link="contact.html"></Button>
      <Button text="BLOG" link="main.html"></Button>
    </div>
  );
};

export default Navbar;
