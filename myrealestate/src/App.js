import React from "react";
import back from "../src/components/backgroundImg/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import img from "../src/components/backgroundImg/r-architecture-Cn87TISYij8-unsplash.jpg";
import logo from "../src/components/logo/RealEst Logo.svg";
import img1 from "../src/components/homes/image1.jpg";
import img2 from "../src/components/homes/image2.jpg";
import img3 from "../src/components/homes/image3.jpg";
import img5 from "../src/components/homes/image5.jpg";
import img6 from "../src/components/homes/image6.jpg";
import img7 from "../src/components/homes/image7.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="image-box">
        <img src={back} alt="back" />
        <div className="box">
          <h2>My name</h2>
          <div className="button2">
            <h3>home</h3>
          </div>
          <div className="butt">
            <p>
              An ideal location for anyone looking to make the most out of
              living in some of the most vibrant areas of London, whilst
              maintaining fantastic access to the city centre and, a fabulous
              living space.
            </p>
            <h3>Select Type</h3>
          </div>
        </div>
        <div className="box2">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="button">
            <h3>Find more</h3>
          </div>

          <h1>Find The Perfect Home</h1>
          <p>The Ideal Home for you.</p>
          <p>
            Please Note: We are a London based specialist in monthly apartment
            rentals. In each property collection we operate multiple apartments
            at the same standards. All apartments are located within 5 minutes
            walking distance of each-other and are allocated based on
            availability.
          </p>

          <ul className="list">
            <li>
              <h2>115k +</h2>
              <p>Family</p>
            </li>
            <li>
              <h2>9.5k +</h2>
              <p>Couple</p>
            </li>
            <li>
              <h2>7k +</h2>
              <p>Single</p>
            </li>
          </ul>
          <div className="bottom">
            <img src={img} alt="bottom" />
          </div>
        </div>
      </div>
      <div className="header">
        <h1>Choose Your Dream Home</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Card 1</h2>
          <img src={img1} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <img src={img2} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <img src={img3} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 4</h2>
          <img src={img6} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 5</h2>
          <img src={img5} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 6</h2>
          <img src={img6} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 7</h2>
          <img src={img7} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
        <div className="card">
          <h2>Card 8</h2>
          <img src={img3} alt="image1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Click me!</button>
        </div>
      </div>
      <div className="title">
        <h1>About Us</h1>
      </div>
      <div className="col-6">
        <img src={img} alt="img" />

        <div className="col-62">
          <p>
            An ideal location for anyone looking to make the most out of living
            in some of the most vibrant areas of London, whilst maintaining
            fantastic access to the city centre and, a fabulous living space.
          </p>
          <button>More!</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2023 Real Estate Solutions. All rights reserved.
            <img src={logo} alt=" logo" />
          </p>
          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
