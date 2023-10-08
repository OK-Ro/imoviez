import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "@splidejs/splide/dist/css/splide.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SearchedResults() {
  const [searched, setSearched] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const fetchData = async (searchQuery) => {
    try {
      const apiUrl = `https://node-mongo-mv85.onrender.com/api/movies/search?query=${encodeURIComponent(
        searchQuery
      )}`;

      const response = await axios.get(apiUrl);

      console.log("Response data:", response.data);
      setSearched(response.data.movies);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("An error occurred while fetching data: " + error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params.search);
  }, [params.search]);

  return (
    <ResultsContainer>
      <BackButton to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </BackButton>
      <ResultsHeader>
        <h2>Search Results:</h2>
      </ResultsHeader>
      {isLoading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : error ? (
        <ErrorIndicator>{error}</ErrorIndicator>
      ) : (
        <SliderContainer>
          {[0, 8, 16, 24].map((start, index) => (
            <div className="column" key={index}>
              <CustomSplide
                options={{
                  perPage: window.innerWidth >= 768 ? 8 : 4,
                  gap: window.innerWidth >= 768 ? "0.2rem" : "0.08rem",
                  pagination: false,
                  arrows: false,
                }}
              >
                {searched.slice(start, start + 8).map((movie) => (
                  <SplideSlide key={movie._id}>
                    <Link to={`/details/${movie._id}`}>
                      <MoviePoster>
                        <img src={movie.thumbnail} alt={movie.title} />
                        <PlayCircleOutlineIcon className="play-button" />
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
  background-color: #141414;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 3rem;
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 4rem;
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
    font-size: 1rem;
    margin: 1rem 0;
  }
`;

const SliderContainer = styled.div`
  margin: 20px;

  @media (max-width: 768px) {
    margin: 1px;
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
const BackButton = styled(Link)`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 14px;
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

export default SearchedResults;
