import React, { useEffect, useState, useCallback, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVideo, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { MovieContext } from "../context/movieContext";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [added, setAdded] = useState(false);

  // Access the context
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

  const handleLike = () => {
    console.log("Liked");
  };

  const handleDislike = () => {
    console.log("Disliked");
  };

  return (
    <DetailsContainer>
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
                  setAdded(!added); // Toggle the added state
                }}
              >
                <FontAwesomeIcon icon={faBookmark} />{" "}
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
                <strong>IMDB: 8.7</strong>
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
              <LikeButton onClick={handleLike}>
                <i className="fas fa-thumbs-up"></i> Like
              </LikeButton>
              <DislikeButton onClick={handleDislike}>
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
      <Footer />
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  background-color: #000;
  padding: 20px;
  position: relative;
`;

const CoverImage = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 50vh;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const MovieDetails = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 15rem;
  margin-right: 15rem;
  height: 45vh;
  padding-top: 4rem;
  margin-bottom: 4rem;
`;

const Content = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 20px;
  margin-top: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 25px 25px 100px rgb(0, 0, 0);
  }
`;

const DetailsInfo = styled.div`
  flex: 2;
  padding-right: 15rem;
`;

const TopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  margin: 10px 0;
  font-size: 18px;

  strong {
    font-weight: bold;
    margin-right: 10px;
  }
`;
const PlayButton = styled.button`
  background-color: #ff5722;
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
  box-shadow: 25px 25px 75px rgb(0, 0, 0), 10px 50px 70px rgb(0, 0, 0),
    inset 5px 5px 10px rgba(0, 0, 0, 0), inset 5px 5px 20px rgba(0, 0, 0, 0.493),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #e64a19;
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
`;

const GroupedButtons = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;

const ErrorIndicator = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: red;
`;

const WatchButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const LikeDislikeButtons = styled.div`
  margin-top: 10px;
`;
const AddToWatchlistButton = styled.button`
  background-color: #a5acb3;
  box-shadow: 25px 25px 100px rgb(0, 0, 0);
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
`;

export default Details;
