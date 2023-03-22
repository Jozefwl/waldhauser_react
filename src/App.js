//import components
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Socialsbar from "./components/Socialsbar";

//arrow function - void function
const App = () => {
  return (
    <>
      <Title text=".waldhauser_"></Title>
      <Navbar></Navbar>
      <Box
        text="Welcome!"
        smalltext="Hello! My name is Jozef Waldhauser. This is my website,
                   you can learn more info about me by going to the about page."
      ></Box>
      <noscript>
        For full functionality of this site it is necessary to enable
        JavaScript. Here are the{" "}
        <a href="https://www.enablejavascript.io/">
          instructions how to enable JavaScript in your web browser
        </a>
        .
      </noscript>
      <Socialsbar></Socialsbar>
    </>
  );
};

export default App;
