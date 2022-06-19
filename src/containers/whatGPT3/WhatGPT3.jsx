import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is iCare"
        text=" iCare is a state of the art online Medical and Pharmaceutical Service. Its features include: 
An ecommerce feature that allows the user to buy medicines. Powered by Alan AI, a sophisticated AI assistant with the ability to understand speech. The user can use speech to order their prescription, providing an easy and unique experience.
A directory again powered by Alan AI that allows the users to get details about Hospital and Medical centres near them.
A personalised health and fitness section that allows the users to keep a check of the number of calories they consume and compare them with other users on the website."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>
        <strong>Ayush</strong>
      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Voice Commands"
        text="It only takes one voice at the right pitch , to start an Avalanche."
      />
      <Feature title="Credits" text=" Ayush + Amit + Sanskar " />
      <Feature
        title="Coming Soon...."
        text="Payment options + Covid19 Tracker + Search Engine+ Chat Box"
      />
    </div>
  </div>
);

export default WhatGPT3;
