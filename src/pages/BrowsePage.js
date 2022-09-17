/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import requests from "../lib/Requests";
import Row from "../components/row/Row";
import Banner from "../components/banner/Banner";
import Nav from "../components/nav/Nav";

function BrowsePage1() {
   const random = Math.round(Math.random() * (5 - 1) + 1);
  return (
    <div className="app">
      <Nav photoURL={`./images/users/${random}.png`} width="30px" />
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
    </div>
  );
}

export default BrowsePage1;
