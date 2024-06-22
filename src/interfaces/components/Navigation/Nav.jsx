import { ButtonNav, Container, Logo } from "../../../styles/Nav";
import { figuresLogoDesk } from "../../../assets/variables";
const Nav = () => {
  return (
    <Container>
      <Logo src={figuresLogoDesk} alt="logo-figures" />
      <nav>
        <ButtonNav to="/demo">Demo</ButtonNav>
        <ButtonNav to="/login">Log in</ButtonNav>
        <ButtonNav to="/register">Sign up</ButtonNav>
      </nav>
    </Container>
  );
};

export default Nav;
