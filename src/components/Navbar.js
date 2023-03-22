import "./Navbar.css";
import Button from "./Button";


const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <Button text="HOME" link="/"></Button>
      <Button text="ABOUT" link="/about"></Button>
      <Button text="CONTACT" link="/contact"></Button>
      <Button text="BLOG" link="/blog"></Button>
    </div>
  );
};

export default Navbar;
