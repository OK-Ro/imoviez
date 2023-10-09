import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 5vh;
    font-size: 0.4rem;
    width: 100%;
    padding: 1rem;
    padding-bottom: 2rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} iMovies. All rights reserved.</p>
      <p>Terms of Use | Privacy Policy</p>
    </FooterContainer>
  );
}

export default Footer;
