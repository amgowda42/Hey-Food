import React from 'react';
import ReactDOM from 'react-dom';
import food_logo from "./assets/food_logo.png"


const Header =() => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={food_logo} className="logo" alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

const  App = () => {
    return(
<Header />
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
