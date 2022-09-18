import React, { useEffect, useState } from "react";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Logo from "../components/Header/Logo";
import NavBar from "../components/Header/NavBar";
import SigninButton from "../components/Header/SigninButton";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";
import Warning from "../components/Header/Warning";

function HeaderCompound({ children }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className={`${show && "nav_black"} navbar-home`}>
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home">
          Unlimited movies, TV shows and more.
        </FeatureTitle>
        <FeatureSubTitle>
          Watch anywhere. Cancel anytime.
        </FeatureSubTitle>
        <Warning>
          Netflix by Tabish
        </Warning>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
