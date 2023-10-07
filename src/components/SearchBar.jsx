import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/searchedResults/" + input);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search by title, character, or genre"
          value={input}
        />
      </SearchContainer>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 4rem;
  text-align: center;
  padding-top: 6rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1.5rem 4rem;
  border-radius: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SearchIcon = styled(FaSearch)`
  font-size: 2rem;
  color: #555;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 2rem;
  color: #333;
  margin-left: 1rem;
  outline: none;
  width: 100%;
`;

export default SearchBar;
