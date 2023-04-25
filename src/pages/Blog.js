import "./Blog.css";
import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import BoxClr from "../components/BoxColor";
import kitchen from "../images/kitchen.jpg";
import { BrowserView, MobileView } from "react-device-detect";

//TODO: mobile specific view and rendering

function Blog() {
  return (
    <>
      <BrowserView>
        <Title text=".blog_"></Title>
        <Navbar></Navbar>

        <BoxClr color="black">
          <p id="blog">
            <h1>Blog</h1>
            Greetings and welcome to my blog! Here I'm sharing information I
            think other people would find interesting. Thank you for the time
            you took to visit my website and blog.
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
            IP: 82.208.17.16:27692<br></br>
            <br></br>
            If you want to be added to whitelist, contact me.
          </p>
        </BoxClr>
      </BrowserView>

      <MobileView>
        <Title text=".blog_"></Title>
        <Navbar></Navbar>

        <BoxClr color="black">
          <p id="blog">
            <h1 id="mobile">Blog</h1>
            Greetings and welcome to my blog! Here I'm sharing information I
            think other people would find interesting. Thank you for the time
            you took to visit my website and blog.
          </p>
        </BoxClr>
        <BoxClr color="white">
          <p id="blog">
            <h1 id="mobile">Kitchen Visualization</h1>
            Sometime in July 2021 I made this kitchen visualisation animation:
          </p>
          <iframe
            height="300px"
            width="250px"
            src="https://www.youtube.com/embed/w1FcyG6Rduw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p id="blog">Here is a photo of the finished kitchen in real life:</p>
          <img
            src={kitchen}
            width="90%"
            height="90%"
            alt="kitchen visualisation visualization"
          ></img>
        </BoxClr>

        <BoxClr color="grey">
          <p id="blog">
            Minecraft server information:<br></br>
            <img
              alt="information"
              src="http://query.fakaheda.eu/82.208.17.16:27692.jpg?color1=ffffff&bg=1&size=160x400"
            />
            <br></br>
            IP: 82.208.17.16:27692<br></br>
            <br></br>
            If you want to be added to whitelist, contact me.
          </p>
        </BoxClr>
      </MobileView>
    </>
  );
}

//TODO: use json from fakaheda minequery and make own server status
export default Blog;
