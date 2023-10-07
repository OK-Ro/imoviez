import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function Category() {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <CategoriesContainer>
      <CategoryHeader>
        <h1>Categories</h1>
      </CategoryHeader>

      <CustomSlider {...sliderSettings}>
        {categories.map((category, index) => (
          <CategoryBlock key={index} index={index}>
            {category}
          </CategoryBlock>
        ))}
      </CustomSlider>
    </CategoriesContainer>
  );
}
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

const CategoriesContainer = styled.div`
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 3rem;
`;

const CategoryHeader = styled.div`
  background-color: transparent;
  padding: 20px;
  padding-left: 40px;
  text-align: left;
`;

const CustomSlider = styled(Slider)`
  display: flex;
  justify-content: center;
`;

const CategoryBlock = styled.div`
  background: ${(props) =>
    props.backgroundColor || gradientColors[props.index]};
  color: #333;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 25px 25px 75px rgb(0, 0, 0), 10px 50px 70px rgb(0, 0, 0),
    inset 5px 5px 10px rgba(0, 0, 0, 0), inset 5px 5px 20px rgba(0, 0, 0, 0.493),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
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
