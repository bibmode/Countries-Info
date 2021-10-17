import { Container, SearchBar } from "./FilterBar.styles";
import SearchIcon from "@mui/icons-material/Search";

const FilterBar = ({ searchCountry }) => {
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
