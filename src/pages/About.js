import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
//import Box from "../components/Box";
import BoxClr from "../components/BoxColor";
//import BoxBlk from "../components/BoxBlack";
import Socialsbar from "../components/Socialsbar";
//import Button from "../components/Button";
import Aboutbox from "../components/AboutMe";

function About() {
  return (
    <>
      <Title text=".about_"></Title>
      <Navbar></Navbar>
      <Aboutbox></Aboutbox>
      <BoxClr color="black">
          <p>
          <i>As you have probably guessed, this is my webpage.</i>
          <br></br>I can model 3D parts, or make a program in JS, C, Lua. I can
          configure a Linux server, install docker, or make a VPN.<br></br>
          <br></br>I also <b>know my way</b> around{" "}
          <b>Cisco switches & routers</b> and a fair bit in networking.<br></br>
          <br></br>
          <strong>
            If you need to 3D print something, be sure to contact me!
          </strong>
          <br></br>
          <br></br>I know how to repair computers, including laptops and phones.
          I built numerous computers{" "}
          <b>from low-end Office machines to High-End Render workstations.</b>
          <i>
            <br></br>
            <br></br>Check out my socials by clicking the links below:
          </i>
          <Socialsbar></Socialsbar>
          (if you refresh the page the shirt colour changes ;)
        </p>
        
      </BoxClr>
      
    </>
  );
}

export default About;
