import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import FilterBar from "../FilterBar";
import GridItem from "../GridItem";
import { Container, Grid, Wrapper } from "./HomeContainer.styles";

const HomeContainer = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <FilterBar />
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
