import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <DesktopOnly>
        <Logo to="/">
          <FontAwesomeIcon icon={faDatabase} style={{ color: "#ff0000" }} />
          Movies
        </Logo>
      </DesktopOnly>
      <Icons>
        <IconLink to="/" data-tooltip="Home">
          <AiOutlineHome />
        </IconLink>
        <IconLink to="/searchbar" data-tooltip="SearchBar">
          <AiOutlineSearch />
        </IconLink>
        <IconLink to="/watchlist" data-tooltip="Watchlist">
          <AiOutlinePlus />
        </IconLink>
        <ProfileLink to="/profile" data-tooltip="Profile">
          <ProfileImage
            src="https://th.bing.com/th/id/R.fd4276ec28cd4d86a55e0a287c01b369?rik=wY%2b0Tq0SLGxMIQ&riu=http%3a%2f%2fwww.funbuzztime.com%2fwp-content%2fuploads%2f2015%2f08%2fMickey-Mouse-Sucide-0.jpg&ehk=%2bsu4wsR%2fL2reTIIdGgbbxjI7dpSyKAZu0el2hE7%2b2wM%3d&risl=&pid=ImgRaw&r=0"
            alt="Mickey Mouse Avatar"
            round
          />
        </ProfileLink>
      </Icons>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  color: #fff;
  transition: background-color 0.3s ease-in-out;

  ${(props) =>
    props.isScrolled &&
    `
    background-color: #333;
    padding: 1.5rem 2.5rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  `}

  @media (max-width: 768px) {
    padding: 0.4rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 10vh;
    padding-top: 0.7rem;
  }
`;

const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`;

const IconLink = styled(Link)`
  font-size: 2.5rem;
  margin-right: 6rem;
  cursor: pointer;
  font-weight: 700;
  color: white;
  position: relative;
  transition: color 0.3s ease;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #ff7000;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ff7000;
    &::before {
      width: 100%;
    }
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 4rem;
  }
`;

const ProfileLink = styled(Link)`
  font-size: 2.5rem;
  margin-right: 2rem;
  cursor: pointer;
  font-weight: 700;
  color: white;
  position: relative;
  transition: color 0.3s ease;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #ff7000;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ff7000;
    &::before {
      width: 100%;
    }
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;

export default NavigationBar;
