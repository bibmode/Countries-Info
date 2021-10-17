import { Container, Details } from "./GridItem.styles";

const GridItem = ({ flag, nation, population, region, capital }) => {
  return (
    <Container>
      <img src={flag} alt="flag" />
      <Details>
        <h3>{nation}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </Details>
    </Container>
  );
};

export default GridItem;
