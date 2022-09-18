/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import requests from "../lib/Requests";
import Row from "../components/row/Row";
import Banner from "../components/banner/Banner";
import Nav from "../components/nav/Nav";
import FooterCompound from "../compounds/FooterCompound";
import Profile from "../components/Profile/Profile";
import { AuthContext } from "../lib/Auth";

function BrowsePage() {
  const random = Math.round(Math.random() * (5 - 1) + 1);
  const [showProfile, setShowProfile] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="app">
      <Nav photoURL={`./images/users/${random}.png`} width="30px" onClick={() => setShowProfile(showProfile === "true" ? "false" : "true")} />
      {console.log(showProfile)}
      {showProfile === "true" ? <Profile random={random} onClick={() => setShowProfile(false)} /> : null}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <FooterCompound />
    </div>
  );
}

export default BrowsePage;
