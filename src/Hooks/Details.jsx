import React, { useEffect, useState, useCallback, useContext } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVideo,
  faBookmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { MovieContext } from "../context/movieContext";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  const { addToWatchlist, removeFromWatchlist } = useContext(MovieContext);

  const fetchDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `https://node-mongo-mv85.onrender.com/api/movies/${params.id}/information`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const detailData = await response.json();

      setDetails(detailData.details);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
      setIsLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <DetailsContainer>
      <BackButton to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </BackButton>

      <CoverImage>
        <img src={details.thumbnail} alt={details.title} />
      </CoverImage>
      <MovieDetails>
        <Content>
          <ImageContainer>
            <img src={details.thumbnail} alt={details.title} />
          </ImageContainer>
          <DetailsInfo>
            <TopInfo>
              <PlayButton>
                <FontAwesomeIcon icon={faPlay} /> Watch Now
              </PlayButton>
              <AddToWatchlistButton
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                onClick={() => {
                  if (added) {
                    removeFromWatchlist(params.id);
                  } else {
                    addToWatchlist(params.id, details);
                  }
                  setAdded(!added);
                }}
              >
                <FontAwesomeIcon icon={faBookmark} />
                {added ? "Remove from WatchList" : "Add to WatchList"}
              </AddToWatchlistButton>
            </TopInfo>
            <InfoItem>
              <strong style={{ color: "black", fontSize: "3rem" }}>
                {details.title}
              </strong>
            </InfoItem>

            <WatchButtons>
              <GroupedButtons>
                <TrailerButton>
                  <FontAwesomeIcon icon={faVideo} /> Trailer
                </TrailerButton>
                <WatchButton>HD</WatchButton>
                <IMDBRating className="imdb-rating">
                  IMDB:<strong>8.7</strong>
                </IMDBRating>
              </GroupedButtons>
            </WatchButtons>
            <InfoItem>
              <strong>Year:</strong> {details.year}
            </InfoItem>
            {details.cast && (
              <InfoItem>
                <strong>Cast:</strong> {details.cast.join(", ")}
              </InfoItem>
            )}
            {details.genres && (
              <InfoItem>
                <strong>Genres:</strong> {details.genres.join(", ")}
              </InfoItem>
            )}
            <InfoItem>
              <strong>Extract:</strong> {details.extract}
            </InfoItem>
            <strong>Rating:</strong>
            <i className="fas fa-star"></i>
            <LikeDislikeButtons>
              <LikeButton>
                <i className="fas fa-thumbs-up"></i> Like
              </LikeButton>
              <DislikeButton>
                <i className="fas fa-thumbs-down"></i> Dislike
              </DislikeButton>
            </LikeDislikeButtons>
          </DetailsInfo>
        </Content>
      </MovieDetails>
      {isLoading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : error ? (
        <ErrorIndicator>{error}</ErrorIndicator>
      ) : null}
    </DetailsContainer>
  );
}
const DetailsContainer = styled.div`
  background: rgb(42, 43, 38);
  padding: 20px;
  position: relative;
  padding-top: 10rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;

    padding: 6rem 0.6rem 0 0.6rem;
  }
`;

const CoverImage = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 50vh;
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      margin-top: 2rem;
      object-fit: fill;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

const MovieDetails = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 10rem;
  margin-right: 10rem;
  padding-top: 8rem;
  height: 40vh;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    border-radius: 2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    padding: 10px;
    height: fit-content;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;
const BackButton = styled(Link)`
  background-color: #ff006a;
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
    margin-bottom: 10rem;
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 14px;
  }
`;

const Content = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 20px;
  margin-top: 1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 25px 25px 100px rgb(0, 0, 0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DetailsInfo = styled.div`
  flex: 2;
  padding-right: 1rem;
  @media (max-width: 768px) {
    padding: 0.1rem;
  }
`;

const TopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.button`
  background-color: #ff006a;
  color: #fff;
  border: none;
  border-radius: 6rem;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #e64a19;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    border-radius: 1.5rem;
    font-size: 13px;
    height: 2.4rem;
    width: 7rem;
  }
`;

const TrailerButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  box-shadow: 25px 25px 75px rgb(0, 0, 0), 10px 50px 70px rgb(0, 0, 0),
    inset 5px 5px 10px rgba(0, 0, 0, 0), inset 5px 5px 20px rgba(0, 0, 0, 0.493),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #e64a19;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const WatchButton = styled.button`
  box-shadow: 25px 25px 75px rgb(0, 0, 0), 10px 50px 70px rgb(0, 0, 0),
    inset 5px 5px 10px rgba(0, 0, 0, 0), inset 5px 5px 20px rgba(0, 0, 0, 0.493),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #e64a19;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const IMDBRating = styled.strong`
  color: #ff4000;
  font-weight: bold;
  strong {
    color: black;
  }
`;

const GroupedButtons = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ErrorIndicator = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: red;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const WatchButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LikeDislikeButtons = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    display: flex;

    align-items: flex-start;
  }
`;

const AddToWatchlistButton = styled.button`
  background-color: #a5acb3;
  box-shadow: inset -5px -5px 15px rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    border-radius: 1.5rem;
    font-size: 13px;
    height: 2.4rem;
    width: 9rem;
  }
`;

const LikeButton = styled.button`
  background-color: #00cc00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  box-shadow: 25px 25px 100px rgb(0, 0, 0);

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const DislikeButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 25px 25px 100px rgb(0, 0, 0);

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export default Details;
