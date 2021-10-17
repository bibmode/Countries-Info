import { Container, SearchBar } from "./FilterBar.styles";
import SearchIcon from "@mui/icons-material/Search";

const FilterBar = () => {
  return (
    <Container>
      <SearchBar>
        <SearchIcon className="searchIcon" />
        <input type="text" placeholder="Search for a country.." />
      </SearchBar>
    </Container>
  );
};

export default FilterBar;
