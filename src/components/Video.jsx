import React from "react";
import styled from "styled-components";

function Video() {
  return (
    <RowContainer>
      <VideoContainer>
        <Header>
          <h2>Romantic</h2>
        </Header>
        <VideoElement muted loop controls={false}>
          <source src="/Romantic.mp4" type="video/mp4" />
        </VideoElement>
      </VideoContainer>

      <VideoContainer>
        <Header>
          <h2>Action</h2>
        </Header>
        <VideoElement muted loop controls={false}>
          <source src="/action.mp4" type="video/mp4" />
        </VideoElement>
      </VideoContainer>

      <LargeVideoContainer>
        <Header>
          <h2>Horror</h2>
        </Header>
        <VideoElement muted loop controls={false}>
          <source src="/horror.mp4" type="video/mp4" />
        </VideoElement>
      </LargeVideoContainer>
    </RowContainer>
  );
}
const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const VideoContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  width: calc(33% - 8px);
  box-sizing: border-box;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: calc(50% - 1px);
    border-radius: 2px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const LargeVideoContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  width: calc(33% - 8px);
  box-sizing: border-box;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: calc(100% - 1px);
    border-radius: 2px;
    padding: 1px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
  }
`;

const VideoElement = styled.video`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Header = styled.div`
  background: url("https://image.shutterstock.com/image-vector/city-scene-on-night-time-260nw-498848536.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.3rem;
  padding: 20px;
  padding-left: 40px;
  text-align: left;

  @media (max-width: 768px) {
    padding-left: 20px;
    font-size: 0.6rem;
    padding: 0;
    padding-left: 20px;
  }
`;

export default Video;
