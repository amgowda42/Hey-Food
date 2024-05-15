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
};

const RestaurantCard = () => {
    return (
      <div className="res-card">
        <img className='res-logo'
          src="https://images.jdmagicbox.com/comp/bangalore/u9/080pxx80.xx80.190514210113.p6u9/catalogue/meghana-foods-sahakara-nagar-bangalore-biryani-restaurants-1xwaklssvg.jpg"
          alt="res-img"
        />
        <h3>Meghana Foods</h3>
        <h4>Biriyani,south indian,</h4>
        <h4>4 stars</h4>
        <h5>36 minuts</h5>
      </div>
    );
};

const Body =() => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    );
}

const  App = () => {
    return (
      <>
        <Header />
        <Body />
      </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
