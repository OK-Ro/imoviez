import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import "@splidejs/splide/dist/css/splide.min.css";

function Trending() {
  const [randomMovies, setRandomMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          "https://node-mongo-mv85.onrender.com/api/movies?number=42";

        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
        setRandomMovies(response.data.movies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching random movies:", error);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Random Movies:", randomMovies);

  return (
    <TrendingContainer>
      <TrendingHeader>
        <h1>Trending Now</h1>
      </TrendingHeader>

      {isLoading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : error ? (
        <ErrorIndicator>{error}</ErrorIndicator>
      ) : (
        <SliderContainer>
          <CustomSplide
            options={{
              perPage: window.innerWidth >= 768 ? 8 : 3,
              gap: "0.2rem",
              pagination: false,
              arrows: false,
            }}
          >
            {randomMovies.map((movie) => (
              <SplideSlide key={movie._id}>
                <MoviePoster>
                  <Link to={`details/${movie._id}`}>
                    <img src={movie.thumbnail} alt={movie.title} />
                    <PlayCircleOutlineIcon className="play-button" />
                  </Link>
                </MoviePoster>
              </SplideSlide>
            ))}
          </CustomSplide>
        </SliderContainer>
      )}
    </TrendingContainer>
  );
}

const TrendingContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const TrendingHeader = styled.div`
  background-color: transparent;
  padding: 20px;
  padding-left: 40px;
  text-align: left;
  background: url("https://image.shutterstock.com/image-vector/city-scene-on-night-time-260nw-498848536.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-zize: 10rem;

  @media (max-width: 768px) {
    padding-left: 20px;
    font-size: 0.6rem;
    padding: 0;
    padding-left: 20px;
  }
`;

const SliderContainer = styled.div`
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px;
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
      widith: 200px;
      height: 18vh;
    }
  }

  .splide__slide img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 10px;
  }

  .splide__slide:hover {
    transform: scale(1.05); /* Slight scale on hover */
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
    font-size: 8rem;
    opacity: 0;
  }

  &:hover .play-button {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default Trending;
