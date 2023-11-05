import { NavContainer, MenuContainer, StyledLink } from "./Navbar.style";

function Navbar() {
  return (
    <NavContainer>
      <StyledLink to="/">Pflix</StyledLink>
      <MenuContainer>
        <StyledLink to="/popular">Popular</StyledLink>
        <StyledLink to="/now_playing">Now Playing</StyledLink>
        <StyledLink to="/top_rated">Top Rated</StyledLink>
        <StyledLink to="/upcoming">Upcoming</StyledLink>
      </MenuContainer>
    </NavContainer>
  );
}

export default Navbar;
