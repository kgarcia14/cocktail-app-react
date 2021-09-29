import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
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
`;

const Img = styled.img`
  width: 50px;
  pointer-events: none;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin: 0 0 5px 0;
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  margin-top: 20px;
  padding: 0 40px;
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
        <DisplayCocktail cocktails={cocktailsByAlcohol} />
      )}
    </>
  );
};

export default MyBar;
