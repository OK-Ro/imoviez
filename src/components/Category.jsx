import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  const sliderSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const categoryRoutes = {
    Action: "/actionmovies",
    Animation: "/animationmovies",
    Comedy: "/comedymovies",
    Crime: "/crimemovies",
    Documentary: "/documentarymovies",
    Drama: "/dramamovies",
    Horror: "/horrormovies",
    Romance: "/romancemovies",
    "Sci-Fi": "/scifimovies",
    Thriller: "/thrillermovies",
    Music: "/musicmovies",
  };

  const categories = [
    "Action",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Music",
  ];

  return (
    <CategoriesContainer>
      <CategoryHeader>
        <h1>Categories</h1>
      </CategoryHeader>

      <CustomSlider {...sliderSettings}>
        {categories.map((category, index) => (
          <CategoryBlock key={index} index={index}>
            <Link
              to={categoryRoutes[category]}
              style={{ textDecoration: "none", color: "white" }}
            >
              {category}
            </Link>
          </CategoryBlock>
        ))}
      </CustomSlider>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 3rem;
  background-color: #000;
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const CategoryHeader = styled.div`
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

  @media (max-width: 768px) {
    padding-left: 20px;
    font-size: 0.6rem;
    padding: 0;
    padding-left: 20px;
  }
`;

const CustomSlider = styled(Slider)`
  display: flex;
  justify-content: center;

  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const CategoryBlock = styled(Link)`
  background: ${(props) =>
    props.backgroundColor || gradientColors[props.index]};
  color: #333;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 25px 25px 75px rgb(0, 0, 0), 10px 50px 70px rgb(0, 0, 0),
    inset 5px 5px 10px rgba(0, 0, 0, 0), inset 5px 5px 20px rgba(0, 0, 0, 0.493),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  text-decoration: none;
  margin: 0 2rem;

  height: 11rem;
  width: 21vw !important;
  font-size: 3rem;
  font-weight: 700;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.74);
    background-image: linear-gradient(45deg, #ff5733, #6c757d);
    color: whitesmoke;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding-top: 0.8rem;
    height: 2rem;
    width: 25vw !important;
    margin-top: 0.1rem;
    border-radius: 0.3rem;
  }
`;
const gradientColors = [
  "linear-gradient(45deg, #c74c4c, #a1544e)",
  "linear-gradient(45deg, #467a9a, #49596b)",
  "linear-gradient(45deg, #c78e4c, #a68a5c)",
  "linear-gradient(45deg, #4b995d, #4e6e5b)",
  "linear-gradient(45deg, #c74c8e, #a5587f)",
  "linear-gradient(45deg, #c74c4c, #a1544e)",
  "linear-gradient(45deg, #4b4cc7, #5d6a95)",
  "linear-gradient(45deg, #c7894c, #a67a5c)",
  "linear-gradient(45deg, #c74c4c, #a1544e)",
  "linear-gradient(45deg, #4c94c7, #5b7b95)",
  "linear-gradient(45deg, #c7894c, #a67a5c)",
];

export default Category;
