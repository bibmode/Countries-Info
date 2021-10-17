import { Container, SearchBar } from "./FilterBar.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const FilterBar = ({ searchCountry }) => {
  // const [value, setValue] = useState("");

  return (
    <Container>
      <SearchBar>
        <SearchIcon className="searchIcon" />
        <input
          onKeyDown={(e) => searchCountry(e)}
          type="text"
          placeholder="Search for a country.."
        />
      </SearchBar>
    </Container>
  );
};

export default FilterBar;
