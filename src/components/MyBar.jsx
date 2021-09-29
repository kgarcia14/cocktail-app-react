import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.form`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`

`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100px;
  height: 120px;
  background: none;
  font-size: 1rem;
`;

const Img = styled.img`
  width: 50px;
  pointer-events: none;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin-top: 30px;
  padding: 0 50px;
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

  return (
    <>
      {cocktailsByAlcohol.length < 1 ? (
        <>
          <Container>
            <Row>
              <Wrapper>
                <Button type="submit" value="vodka" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Vodka
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="gin" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Gin
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="tequila" onClick={handleClick}>
                  <Img src="../../../images/tequila.png" alt=""></Img>
                  Tequila
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="rum" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Rum
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="bourbon" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Bourbon
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="scotch" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Scotch
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="brandy" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Brandy
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="cognac" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Cognac
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="champagne" onClick={handleClick}>
                  <Img src="../../../images/my-bar.svg" alt=""></Img>
                  Champagne
                </Button>
              </Wrapper>
            </Row>
          </Container>
          <H2 id="heading">Select For A List Of Cocktails.</H2>
        </>
      ) : (
        <DisplayCocktail cocktails={cocktailsByAlcohol} />
      )}
    </>
  );
};

export default MyBar;
