import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import FilterBar from "../FilterBar";
import GridItem from "../GridItem";
import { Container, Grid, Wrapper } from "./HomeContainer.styles";

const HomeContainer = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [errorOccured, setErrorOccured] = useState(false);

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
        if (data.status === 404) throw new Error(`Can't find data`);

        setCountries(data);
        setLoading(false);
        setErrorOccured(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorOccured(true);
        console.log(`${error}`);
      });
  }, [search]);

  const searchCountry = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
      setLoading(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FilterBar searchCountry={searchCountry} />
        <Grid>
          {!errorOccured &&
            !loading &&
            countries.map((country) => (
              <GridItem
                nation={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
              ></GridItem>
            ))}
          {errorOccured && <p>Can't find data</p>}
          {loading && <CircularProgress className="loadingProgress" />}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default HomeContainer;
