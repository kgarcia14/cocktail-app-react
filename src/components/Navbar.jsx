import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #eee;
  display: flex;
  height: 65px;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Label = styled.label`
  color: #31d0aa;
  font-size: 1rem;
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/">
          <Img src="../../../images/explore.svg"></Img>
        </Link>
        <Label>Home</Label>
      </NavItem>
      <NavItem>
        <Link to="/search">
          <Img src="../../../images/search.svg"></Img>
        </Link>
        <Label>Search</Label>
      </NavItem>
      <NavItem>
        <Link to="/mybar">
          <Img src="../../../images/my-bar.svg"></Img>
        </Link>
        <Label>My Bar</Label>
      </NavItem>
      <NavItem>
        <Link to="/favorites">
          <Img src="../../../images/favorites.svg"></Img>
        </Link>
        <Label>Favorites</Label>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
