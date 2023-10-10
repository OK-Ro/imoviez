import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

import { Link } from "react-router-dom";

import "@splidejs/splide/dist/css/splide.min.css";

import CircularLoader from "../Hooks/CircularLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function AnimationMovies() {
  const [randomMovies, setRandomMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          "https://node-mongo-mv85.onrender.com/api/movies/animated";
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
        setRandomMovies(response.data.movies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching action movies:", error);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ResultsContainer>
      <ResultsHeader>
        <h2>Animation</h2>
      </ResultsHeader>
      {isLoading ? (
        <LoadingIndicator>
          {" "}
          <CircularLoader />
        </LoadingIndicator>
      ) : error ? (
        <ErrorIndicator>{error}</ErrorIndicator>
      ) : (
        <SliderContainer>
          {[0, 8, 16, 24].map((start, index) => (
            <div className="column" key={index}>
              <CustomSplide
                options={{
                  perPage: 8,
                  gap: "0.2rem",
                  pagination: false,
                  arrows: false,
                }}
              >
                {randomMovies.slice(start, start + 8).map((movie) => (
                  <SplideSlide key={movie._id}>
                    <Link to={`/details/${movie._id}`}>
                      <MoviePoster>
                        <img src={movie.thumbnail} alt={movie.title} />
                        {window.innerWidth >= 768 ? (
                          <FontAwesomeIcon
                            icon={faPlayCircle}
                            className="play-button"
                          />
                        ) : null}
                      </MoviePoster>
                    </Link>
                  </SplideSlide>
                ))}
              </CustomSplide>
            </div>
          ))}
        </SliderContainer>
      )}
    </ResultsContainer>
  );
}

const ResultsContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 3rem;
  height: fit-content;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-bottom: 2rem;
  }
`;

const ResultsHeader = styled.div`
  font-size: 4rem;
  font-weight: 900;
  margin: 3rem 0;
  background: url("https://www.worldatlas.com/r/w1200-q80/upload/fa/1e/8b/shutterstock-154896791.jpg/");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
`;

const SliderContainer = styled.div`
  margin: 20px;

  @media (max-width: 768px) {
    margin: 2px;
    padding: 0;
  }
`;

const CustomSplide = styled(Splide)`
  .splide__slide {
    width: 100%;
    margin: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 10px;

    @media (max-width: 768px) {
      border-radius: 5px;
      widith: 200px;
      height: 18vh;
      margin: 5px;
    }
  }

  .splide__slide img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 5px;
  }

  .splide__slide:hover {
    transform: scale(1.05);
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ErrorIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;
  color: red;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const MoviePoster = styled.div`
  width: 10vw;
  margin: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }

  .play-button {
    color: yellow;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    opacity: 0;
  }

  &:hover .play-button {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
export default AnimationMovies;
