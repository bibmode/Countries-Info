import { useEffect, useState } from "react";
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

  const getAllData = () => {
    console.log(countries[0]);
  };

  return (
    <Container>
      <Wrapper>
        <button onClick={() => getAllData()}>show all</button>

        <Grid>
          {countries.length !== 0 &&
            countries.map((country) => (
              <GridItem
                nation={country.name.common}
                flag={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
              ></GridItem>
            ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default HomeContainer;
