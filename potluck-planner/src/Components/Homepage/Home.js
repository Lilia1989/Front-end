import React from "react";
import { useHistory } from "react-router-dom";
import "./home.styles.css";
export default function Home() {
  const { push } = useHistory();
  return (
    <div className="home-container">
      <img
        className="home-img"
        src='https://static.wixstatic.com/media/ac3b13_4ee0b6394f2943e0aed8da4a5389690b~mv2.png/v1/crop/x_0,y_0,w_1024,h_526/fill/w_450,h_233,al_c,q_85,usm_0.66_1.00_0.01/Vegetables-and-fruit-on-world-map-small-.webp' alt='pot-luck'
      />
      <div className="home-slogan-container">
        <h1 className="home-slogan">Welcome to Potluck Planner</h1>
        <h2 className="home-wording">Gather friends for dinner parties!</h2>
        <h3 className="home-wording">Explore food, history and culture</h3>
        
        <div className="home-nav-links">
          <button
            onClick={() => push("/sign-up")}
            type="button"
            class="home-signup btn btn-outline-success"
          >
            Sign Up
          </button>
          <button
            onClick={() => push("/Item-list")}
            type="button"
            class="home-signin btn btn-outline-success"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}