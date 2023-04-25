import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Socialsbar from "../components/Socialsbar";
import BoxClr from "../components/BoxColor";
import { BrowserView, MobileView } from "react-device-detect";

function Contact() {
  return (
    <>
      <BrowserView>
        <Title text=".contact_"></Title>
        <Navbar></Navbar>
        <BoxClr color="white">
          <p>
            <h1>Contacts</h1>
            <Socialsbar></Socialsbar>
            <p>Please contact me using LinkedIn, or prefferably</p>
            <p>
              use the <b>form below:</b>
            </p>
          </p>
        </BoxClr>

        <BoxClr color="grey">
          <h2 class="shadow">Please use the following form:</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeF6gq1Sw7yoVGlxF35fUjzsLqo5WPD671Ll1PMDiACbluRpQ/viewform?embedded=true"
            width="700"
            height="750"
            frameBorder="0"
            title="Contact Form"
          >
            Loading...
          </iframe>
        </BoxClr>
      </BrowserView>

      <MobileView>
        <Title text=".contact_"></Title>
        <Navbar></Navbar>
        <BoxClr color="white">
          <p>
            <h1>Contacts</h1>
            <Socialsbar></Socialsbar>
            <p>Please contact me using LinkedIn, or prefferably</p>
            <p>
              use the <b>form below:</b>
            </p>
          </p>
        </BoxClr>

        <BoxClr color="carbon">
          <h2 class="shadow">Please use the following form:</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeF6gq1Sw7yoVGlxF35fUjzsLqo5WPD671Ll1PMDiACbluRpQ/viewform?embedded=true"
            width="250"
            height="1000"
            frameBorder="0"
            title="Contact Form"
          >
            Loading...
          </iframe>
        </BoxClr>
      </MobileView>
    </>
  );
}

export default Contact;
