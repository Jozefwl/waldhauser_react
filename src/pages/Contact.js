import React from "react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import BoxBlk from "../components/BoxBlack";
import Socialsbar from "../components/Socialsbar";
import BoxWht from "../components/BoxWhite";

function Contact() {
  return (
    <>
      <Title text=".contact_"></Title>
      <Navbar></Navbar>
      <BoxWht>
        <h1>Contacts</h1>
        <Socialsbar></Socialsbar>
        <p>Please contact me using LinkedIn, or prefferably</p>
        <p>
          use the <b>form below:</b>
        </p>
      </BoxWht>

      <BoxBlk>
        <h5 class="shadow">Please use the following form:</h5>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeF6gq1Sw7yoVGlxF35fUjzsLqo5WPD671Ll1PMDiACbluRpQ/viewform?embedded=true"
          width="700"
          height="750"
          frameBorder="0"
          title="Contact Form"
        >
          Loading...
        </iframe>
      </BoxBlk>
    </>
  );
}

export default Contact;
