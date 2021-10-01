import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 360px) {
    margin-top: 25px
  }

  @media (min-width: 414px) {
    margin-top: 40px;
  }
`;

const Mybarlist = styled.div`
  display: flex;
  justify-content: center;
`;

const Reload = styled.button`
  border: none;
  background: none;
  background-color: #fff;;
  color: #31d0aa;
  font-size: 1rem;
  height: 50px;
  width: 100%;
  position: fixed;
  text-align: center;
  top: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100px;
  height: 120px;

  @media (min-width: 360px) {
    width: 115px;
    height: 125px;
  }

  @media (min-width: 414px) {
    width: 120px;
    height: 130px;
  }
`;

const Button = styled.button`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border: none;
  background: none;
  font-size: 1rem;

  @media (min-width: 360px) {
    font-size: 1.1rem;
  }

  @media (min-width: 414px) {
    font-size: 1.2rem;
  }
`;

const Img = styled.img`
  width: 50px;
  pointer-events: none;
  margin-bottom: 10px;

  @media (min-width: 360px) {
    width: 51px;
  }

  @media (min-width: 414px) {
    width: 52px;
  }
`;

const Label = styled.label`
  margin: 0 0 5px 0;
`;

const H2 = styled.h2`
  font-size: 1.6rem;
  margin: 10px 30px 10px 30px;
  font-weight: 500;

  @media (min-width: 360px) {
    font-size: 1.7rem;
    margin: 40px 50px 0 50px;
  }

  @media (min-width: 414px) {
    font-size: 2rem;
    margin: 40px 50px 0 50px;
  }
`;

const Cocktails = styled.div`
  margin-top: -50px;
  
  @media (min-width: 360px) {
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 414px) {
  }
`;

const MyBar = () => {
  const [cocktailsByAlcohol, setCocktailsByAlcohol] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const inputValue = e.target.value;
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`
      )
      .then((res) => {
        const data = res.data.drinks;
        setCocktailsByAlcohol(data);
        console.log(cocktailsByAlcohol);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reload = () => {
    setCocktailsByAlcohol([]);
  }

  return (
    <>
      {cocktailsByAlcohol.length < 1 ? (
        <>
          <Container>
            <Row>
              <Wrapper>
                <Button type="submit" value="vodka" onClick={handleClick}>
                  <Img src="../../../images/vodka.png" alt="vodka"></Img>
                  <Label>Vodka</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="gin" onClick={handleClick}>
                  <Img src="../../../images/gin.png" alt="gin"></Img>
                  <Label>Gin</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="tequila" onClick={handleClick}>
                  <Img src="../../../images/tequila.png" alt="tequila"></Img>
                  <Label>Tequila</Label>
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="rum" onClick={handleClick}>
                  <Img src="../../../images/rum.png" alt="rum"></Img>
                  <Label>Rum</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="bourbon" onClick={handleClick}>
                  <Img src="../../../images/bourbon.png" alt="bourbon"></Img>
                  <Label>Bourbon</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="scotch" onClick={handleClick}>
                  <Img src="../../../images/scotch.png" alt="scotch"></Img>
                  <Label>Scotch</Label>
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="brandy" onClick={handleClick}>
                  <Img src="../../../images/brandy.png" alt="brandy"></Img>
                  <Label>Brandy</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="cognac" onClick={handleClick}>
                  <Img src="../../../images/cognac.png" alt="cognac"></Img>
                  <Label>Cognac</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="champagne" onClick={handleClick}>
                  <Img src="../../../images/champagne.png" alt="champagne"></Img>
                  <Label>Champagne</Label>
                </Button>
              </Wrapper>
            </Row>
          </Container>
          <H2 id="heading">Select For A List Of Cocktails.</H2>
        </>
      ) : (
        <Mybarlist>
          <Reload type="button" onClick={reload}>Go Back</Reload>
          <Cocktails>
            <DisplayCocktail cocktails={cocktailsByAlcohol} />
          </Cocktails>
        </Mybarlist>
      )}
    </>
  );
};

export default MyBar;
