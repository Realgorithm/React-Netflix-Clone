/* eslint-disable no-lone-blocks */
/* eslint-disable import/order */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import axios from "../../lib/Axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

// Passing title as props
function Row({ title, fetchURL, isLargeRow }) {
  // Destructuring and hooks
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which rans based on a specific condition/variable
  useEffect(() => {
    // When the row appears on the screen, makes a request to show the movies
    // if [] => run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // "https://api.themoviedb.org/3/discover/tv?api-key=${API_KEY}&with_networks=213"
      // { console.log(request.data.results); }
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // Any variable pulled outsited of useEffect scope has to go inside the [] at the end of the method
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "" || movie?.title || movie?.original_title || movie?.homepage)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* Passing Row title as text for h2 */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies.map(movie => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {console.log(trailerUrl)}
      {trailerUrl && (
        <YouTube className="video_container" videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
}

export default Row;
