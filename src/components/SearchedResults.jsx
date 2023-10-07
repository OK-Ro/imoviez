import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "@splidejs/splide/dist/css/splide.min.css";

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
                  perPage: 8,
                  gap: "0.2rem",
                  pagination: false,
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
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 3rem;
`;

const ResultsHeader = styled.div`
  background-color: transparent;
  padding: 20px;
  padding-left: 40px;
  text-align: left;
`;

const SliderContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Add space between columns */
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
  }

  .splide__slide img {
    width: 100%;
    height: auto;
    display: block;
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
`;

const ErrorIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;
  color: red;
`;

const MoviePoster = styled.div`
  width: 10vw;
  margin: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 10px;
  &:hover {
    border: 0.5rem solid whitesmoke;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default SearchedResults;