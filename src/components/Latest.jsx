import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import useMovies from "../Hooks/useMovies";

const Latest = () => {
  const latestMovies = useMovies;

  return (
    <Wrapper>
      <Container>
        {latestMovies.length > 0 ? (
          <>
            <style>{CarouselStyles}</style>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              emulateTouch
              showArrows={false}
              style={{ padding: "20px" }}
            >
              {latestMovies.map((movie) => (
                <div key={movie.title}>
                  <Card>
                    <Image src={movie.thumbnail} alt={movie.title} />
                    <Content>
                      <Title>{movie.title}</Title>
                      <MovieInfo>
                        <p>Year: {movie.year}</p>
                        <p>Cast: {movie.cast.join(", ")}</p>
                        <p>Genres: {movie.genres.join(", ")}</p>
                      </MovieInfo>
                    </Content>
                  </Card>
                </div>
              ))}
            </Carousel>
          </>
        ) : (
          <p>No latest movies available.</p>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  background: rgb(42, 43, 38);
  padding-top: 10rem;
  display: block;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 97vw;
  height: 35rem;
  border-radius: 2rem;
  overflow: hidden;
  margin: 0 auto;
  border: 1rem solid transparent;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 102vw;
    height: 14rem;
    border-radius: 1.5rem;
    padding-top: 5rem;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.9);
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Title = styled.p`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 0.8rem;
  }
`;
const CarouselStyles = `
  .carousel-root {
    overflow: auto !important;
  }
`;

const MovieInfo = styled.div`
  text-align: left;
  color: #fff;
  font-size: 1.2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  width: 35rem;
  p {
    margin: 0.25rem 0;
  }

  @media (max-width: 768px) {
    width: auto;
    padding-bottom: 0.1rem;
    padding-left: 0.8rem;
    font-size: 0.4rem;
  }
`;

export default Latest;
