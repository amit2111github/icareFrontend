import storeItems from "./items.json";
import hospitalItems from "./hospital.json";
import Store from "./components/Store";
import Hospital from "./components/Hospital";
import Cart from "./components/Cart";
import useAlan from "./hooks/useAlan";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import Brand2 from "./components/HospitalBrand/Brand2";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Footer from "./containers/footer/Footer";
import Features from "./containers/features/Features";
import Signin from "./auth/Sign";
import Signup from "./auth/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//
const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Store items={storeItems} />
      <Cart />
      <WhatGPT3 />
      <Brand2 />
      <Hospital items={hospitalItems} />
      <Features />
      <Footer />
    </div>
  );
};
function App() {
  useAlan();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
