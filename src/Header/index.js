import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Container, Wrapper, Theme, Title } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Where in the world?</Title>
        <Theme>
          <Brightness3Icon class="icon" />
          Dark Mode
        </Theme>
      </Wrapper>
    </Container>
  );
};

export default Header;
