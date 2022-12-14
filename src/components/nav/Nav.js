/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav({ photoURL, width, ...restProps }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  // console.log(photoURL)
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav_logo"
      />
      <button {...restProps}>
        <img src={photoURL} alt="Netflix logo" className="nav_avatar" style={{ width }} {...restProps} />
      </button>

    </div>
  );
}

export default Nav;
