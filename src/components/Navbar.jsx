import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #eee;
  display: flex;
  height: 65px;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;

  @media (min-width: 414px) {
    height: 70px;
  }
`;

const NavItem = styled.div`
  height: 100%;
  width: 25%;

  .nav-link {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
  }

  .active {
    background-color: #f7f7f7;
  }
`;

const Label = styled.label`
  color: #31d0aa;
  font-size: 1rem;

  @media (min-width: 414px) {
    font-size: 1.1rem;
  }
`;

const Img = styled.img`
  height: 25px;
  width: 25px;

  @media (min-width: 414px) {
    height: 30px;
    width: 30px;
  }
`;

const Navbar = () => {
  const [url, setUrl] = useState('');

  const location = useLocation();

  const handleClick = () => {
    console.log(url)
  }

  useEffect(() => {
    setUrl(location.pathname)
  }, [location.pathname])

  return (
    <Nav>
      <NavItem>
        <NavLink exact activeClassName="active" className="nav-link" to="/">
          <Img src="../../../images/explore.svg"></Img>
          <Label>Home</Label>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeClassName="active" className="nav-link" to="/search" onClick={handleClick}>
          <Img src="../../../images/search.svg"></Img>
          <Label>Search</Label>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeClassName="active" className="nav-link" to="/mybar">
            <Img src="../../../images/my-bar.svg"></Img>
          <Label>My Bar</Label>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink activeClassName="active" className="nav-link" to="/favorites">
          <Img src="../../../images/favorites.svg"></Img>
          <Label>Favorites</Label>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
