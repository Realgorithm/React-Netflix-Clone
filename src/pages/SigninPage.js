/* eslint-disable no-alert */
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../lib/Auth";
import { FirebaseContext } from "../context/FirbaseContext";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Warning from "../components/Header/Warning";
import Logo from "../components/Header/Logo";
import NavBar from "../components/Header/NavBar";
import SignupButton from "../components/Header/SignupButton";
import SignFormBase from "../components/SignForm/SignFormBase";
import SignFormButton from "../components/SignForm/SignFormButton";
import SignFormCaptcha from "../components/SignForm/SignFormCaptcha";
import SignFormError from "../components/SignForm/SignFormError";
import SignFormInput from "../components/SignForm/SignFormInput";
import SignFormLink from "../components/SignForm/SignFormLink";
import SignFormText from "../components/SignForm/SignFormText";
import SignFormTitle from "../components/SignForm/SignFormTitle";
import SignFormWrapper from "../components/SignForm/SignFormWrapper";
import FooterCompound from "../compounds/FooterCompound";

function SigninPage() {
  // const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);

  const IsInvalid = password === "" || emailAddress === "";

  function handleSubmit(event) {
    event.preventDefault();
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          setEmailAddress("");
          setPassword("");
          // history.push("/browse");
        }).catch(error => setError(error.message));
    } catch (error) { setError(); }
  }
  if (currentUser) {
    return <Redirect to="/browse" />;
  }
  return (
    <>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-signin">
          <Logo />
          <SignupButton>SignUp</SignupButton>
        </NavBar>
        <SignFormWrapper>
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <Warning>Netflix clone by Tabish</Warning>
            <SignFormTitle>Sign In</SignFormTitle>
            {error ? <SignFormError>{error}</SignFormError> : null}
            <SignFormInput
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignFormButton disabled={IsInvalid}>Sign In</SignFormButton>
            <SignFormText>
              New to Netflix?
              <SignFormLink href="/signup">Sign up now.</SignFormLink>
            </SignFormText>
            <SignFormCaptcha>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderWrapper>
      <FooterCompound />
    </>
  );
}

export default SigninPage;
