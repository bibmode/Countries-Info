import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import FilterBar from "../FilterBar";
import GridItem from "../GridItem";
import { Container, Grid, Wrapper } from "./HomeContainer.styles";

const HomeContainer = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setCountries(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      `${
        search
          ? `https://restcountries.com/v3.1/name/${search}`
          : "https://restcountries.com/v3.1/all"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setCountries(data);
        setLoading(false);
      });
  }, [search]);

  const searchCountry = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FilterBar searchCountry={searchCountry} />
        <Grid>
          {!loading ? (
            countries.map((country) => (
              <GridItem
                nation={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
              ></GridItem>
            ))
          ) : (
            <CircularProgress className="loadingProgress" />
          )}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default HomeContainer;
