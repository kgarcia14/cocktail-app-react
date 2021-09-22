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

  .nav-link {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
  }
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
        <Link className="nav-link" to="/">
          <Img src="../../../images/explore.svg"></Img>
          <Label>Home</Label>
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/search">
          <Img src="../../../images/search.svg"></Img>
          <Label>Search</Label>
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/mybar">
          <Img src="../../../images/my-bar.svg"></Img>
          <Label>My Bar</Label>
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/favorites">
          <Img src="../../../images/favorites.svg"></Img>
          <Label>Favorites</Label>
        </Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
