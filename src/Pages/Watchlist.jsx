import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "../context/movieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Watchlist() {
  const { watchList, removeFromWatchlist } = useContext(MovieContext);

  return (
    <WatchlistContainer>
      <BackButton to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </BackButton>
      <CustomH1>Watchlist</CustomH1>
      {watchList.length === 0 ? (
        <EmptyWatchlistMessage>Your watchlist is empty.</EmptyWatchlistMessage>
      ) : (
        <MoviesGrid>
          {watchList.map((movie) => (
            <MovieItem key={movie.id}>
              {movie.details && (
                <>
                  <MovieThumbnail
                    src={movie.details.thumbnail}
                    alt={movie.details.title}
                  />
                  <RemoveButton
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    <FontAwesomeIcon icon={faBookmark} /> Remove
                  </RemoveButton>
                </>
              )}
            </MovieItem>
          ))}
        </MoviesGrid>
      )}
    </WatchlistContainer>
  );
}

const WatchlistContainer = styled.div`
  padding: 20px;

  background: rgb(42, 43, 38);
  color: #fff; /* Text color */
  height: fit-content;
  padding-top: 10rem;
  padding-bottom: 20rem;
  @media (max-width: 768px) {
    padding: 3.5rem;
    padding-top: 5rem;
    padding-bottom: 8rem;
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

const CustomH1 = styled.h1`
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

const EmptyWatchlistMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const MovieItem = styled.div`
  background-color: #141414;
  height: 27vh;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  width: 105%;
  border-radius: 0.6rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieThumbnail = styled.img`
  width: 100%;
  height: 23vh;
  border-radius: 0.6rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e50914;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default Watchlist;
