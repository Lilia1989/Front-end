import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../Helpers/axiosWithAuth";
import "./Nav.styles.css";
export default function Navigation() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [helloName, setHelloName] = useState("");
  const userId = localStorage.getItem("id");
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        userId && setIsLogIn(true);
        setHelloName(response.data.username);
      })
      .catch((error) => console.log(error));
  }, [userId]);
  return (
    <div className="header-container">
      <Link className="logo" to="/">
        You Are Invited!
      </Link>
      <div className="nav-container">
        {isLogIn && (
          <Link className="option1" to="/my-profile">
            <p className="option-hello">HELLO</p>{" "}
            <p className="option-name">{helloName}</p>
          </Link>
        )}
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/Items-List">
          MY Potluck
        </Link>
        <Link className="option" to="/Item-Form">
          OrganizerTable
        </Link>
        <Link className="option" to="/" onClick={() => localStorage.clear()}>
          LogOut
        </Link>
      </div>
    </div>
  );
}