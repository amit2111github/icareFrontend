import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Medicine Details",
    text: "Give me (the|) (details|detail) of (ITEM_NAME) . e.g: Give me the detail of Lyrica",
  },
  {
    title: "Hospital Details",
    text: "Give me (the|) (details|detail) of $(HOSPITAL_NAME) . e.g: Give me the detail of Apollo hospital",
  },
  {
    title: "Available Beds",
    text: "How many beds (are|) (available|) at $(HOSPITAL_NAME). e.g: How many beds are available /are at PMCH ",
  },
  {
    title: "Address",
    text: "Tell me (the|) Address of  $(HOSPITAL_NAME) e.g: Tell me Adress of Nanavati Hospital. ",
  },
  {
    title: "Special / Key Features",
    text: "what are (the|) (salient|special|key|) features of  $(HOSPITAL_NAME) e.g: What are the key features of Indraprastha  Hospital ",
  },
  {
    title: "Open-Cart",
    text: "open the cart / view the cart  / check the cart / (open/check/view) cart",
  },
  {
    title: "Close-cart",
    text: "close the cart / close cart",
  },
  {
    title: "Add-item to cart",
    text: "Add (the) item-name (item) to (the) cart. e.g:Add Paracetamol to cart ..",
  },
  {
    title: "Remove item from Cart",
    text: "Remove (the) item-name (item) from (the) cart. e.g: Remove Paracetamol from cart etc...",
  },
  {
    title: "Purchase Items",
    text: "Checkout / (Purchase-items) (from) (Cart) e.g: Checkout",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="commands">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Commands !</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
