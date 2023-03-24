import "./Blog.css";
import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import BoxClr from "../components/BoxColor";
import kitchen from "../images/kitchen.jpg";

function Blog() {
  return (
    <>
      <Title text=".blog_"></Title>
      <Navbar></Navbar>

      <BoxClr color="black">
        <p id="blog">
        <h1>Blog</h1>
        Greetings and welcome to my blog! Here I'm sharing information I think other people would find interesting. Thank you for the time you took to visit my website and blog.
        </p>
      </BoxClr>

      <BoxClr color="white">
        <p id="blog">
          <h1>Kitchen Visualization</h1>
          Sometime in July 2021 I made this kitchen visualisation animation:
        </p>
        <iframe
          height="200px"
          width="400px"
          src="https://www.youtube.com/embed/w1FcyG6Rduw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p id="blog">Here is a photo of the finished kitchen in real life:</p>
        <img
          src={kitchen}
          width="50%"
          height="50%"
          alt="kitchen visualisation visualization"
        ></img>
      </BoxClr>

      <BoxClr color="grey">
        <p id="blog">
          Minecraft server information:<br></br>
          <img
            alt="waldo"
            src="http://query.fakaheda.eu/82.208.17.16:27692.jpg?size=550x100"
          ></img>
          <br></br>
          IP: 82.208.17.16:27692<br></br><br></br>
          If you want to be added to whitelist, contact me.
        </p>
      </BoxClr>

      
    </>
  );
}

export default Blog;
