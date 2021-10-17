import { IconButton } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Container, Wrapper, Theme } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Where in the world?</h1>
        <Theme>
          <IconButton aria-label="delete" disabled color="primary">
            <Brightness3Icon />
          </IconButton>
          Dark Mode
        </Theme>
      </Wrapper>
    </Container>
  );
};

export default Header;
