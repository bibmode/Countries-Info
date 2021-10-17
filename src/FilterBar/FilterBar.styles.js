import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 5rem;
`;

export const SearchBar = styled.div`
  font-size: 1.6rem;
  width: min(45rem, 100%);
  height: fit-content;
  position: relative;
  color: hsl(0, 0%, 52%);

  .searchIcon {
    position: absolute;
    font-size: 2.5rem;
    margin-top: 1.6rem;
    margin-left: 2rem;
    color: inherit;
  }

  input {
    font-size: inherit;
    outline: none;
    border: none;
    background-color: #fff;
    padding: 2rem;
    padding-left: 6rem;
    width: 100%;
    color: hsl(200, 15%, 8%);
    box-shadow: 0 0.2rem 0.5rem rgba(17, 21, 23, 0.1);
    border-radius: 4px;
  }
`;

export const FilterRegion = styled.div``;
