import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const ReloadDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;

  @media screen and (min-width: 768px) {
    height: 70px;
  }  
`;

const Reload = styled.button`
  border: none;
  background: none;
  background-color: #fff;;
  color: #31d0aa;
  font-size: 1rem;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
    margin-right: 30px;
  }
`;

const Container = styled.div`
height: 100vh;

@media screen and (min-width: 568px) and (orientation: landscape) {
    display: flex;
    align-items: center;
  }
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  @media screen and (min-width: 360px) {
    margin-top: 25px
  }

  @media screen and (min-width: 414px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 568px) and (orientation: landscape) {
      width: 60%;
      height: 260px;
      margin: 0;
  }
`;

const Mybarlist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-bottom: 40px;

    .center-wrapper {
      margin: 0 50px;
    }
  }

  @media screen and (min-width: 568px) and (orientation: landscape) {
    justify-content: center;
    margin-bottom: 5px;

    .center-wrapper {
      margin: 0 20px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100px;
  height: 120px;

  @media screen and (min-width: 360px) {
    width: 115px;
    height: 125px;
  }

  @media screen and (min-width: 414px) {
    width: 120px;
    height: 130px;
  }

  @media screen and (min-width: 1024px) {
      width: 160px;
      height: 185px;
    }

  @media screen and (min-width: 568px) and (orientation: landscape) {
    width: 60px;
    height: 75px;
  }

  @media screen and (min-width: 823px) and (orientation: landscape) {
    width: 85px;
    height: 95px;
    }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 100px;
    height: 120px;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
      width: 160px;
      height: 180px;
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

  @media screen and (min-width: 360px) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 414px) {
    font-size: 1.2rem;
  }
`;

const Img = styled.img`
  width: 50px;
  pointer-events: none;
  margin-bottom: 10px;

  @media screen and (min-width: 360px) {
    width: 51px;
  }

  @media screen and (min-width: 414px) {
    width: 52px;
  }

  @media screen and (min-width: 568px) and (orientation: landscape) {
    width: 27px;
    margin-bottom: 5px
  }

  @media screen and (min-width: 1024px) {
    width: 75px;
    }

  @media screen and (min-width: 823px) and (orientation: landscape) {
    width: 35px;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    width: 50px;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
      width: 75px;
    }
`;

const Label = styled.label`
  margin: 0 0 5px 0;

  @media screen and (min-width: 1024px) {
      font-size: 1.4rem;
      margin: 8px 0;
    }

  @media screen and (min-width: 568px) and (orientation: landscape) {
    font-size: .60rem;
  }

  @media screen and (min-width: 823px) and (orientation: landscape) {
    font-size: .85rem;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    margin: 0 0 5px 0;
    font-size: 1rem;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
      font-size: 1.3rem;
      margin: 8px 0;
    }
`;

const Heading = styled.div`

@media screen and (min-width: 568px) and (orientation: landscape) {
    display: flex;
    align-items: center;
    width: 50%;
    margin-right: 20px;
  }
`;

const H2 = styled.h2`
  color: #393939;    
  font-size: 1.6rem;
  margin: 10px 30px 10px 30px;
  font-weight: 500;

  @media screen and (min-width: 360px) {
    font-size: 1.7rem;
    margin: 40px 50px 0 50px;
  }

  @media screen and (min-width: 414px) {
    font-size: 2.7rem;
    margin: 40px 50px 0 50px;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 50px 0 50px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
    }

  @media screen and (min-width: 568px) and (orientation: landscape) {
    margin: 0 80px 0 0;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 823px) and (orientation: landscape) {
    font-size: 2.5rem;
    }

  @media screen and (min-width: 1366px) and (orientation: landscape) {
    font-size: 4rem;
    }
`;

const Cocktails = styled.div`
  margin-top: -30px;
`;

const MyBar = ({ theme }) => {
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
        <Container style={theme === 'dark'? {backgroundColor: '#181a1b'} : {backgroundColor: '#fff'}}>
          <Content>
            <Row>
              <Wrapper>
                <Button type="submit" value="vodka" onClick={handleClick}>
                  <Img src="../../../images/vodka.png" alt="vodka"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Vodka</Label>
                </Button>
              </Wrapper>
              <Wrapper className="center-wrapper">
                <Button type="submit" value="gin" onClick={handleClick}>
                  <Img src="../../../images/gin.png" alt="gin"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Gin</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="tequila" onClick={handleClick}>
                  <Img src="../../../images/tequila.png" alt="tequila"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Tequila</Label>
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="rum" onClick={handleClick}>
                  <Img src="../../../images/rum.png" alt="rum"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Rum</Label>
                </Button>
              </Wrapper>
              <Wrapper className="center-wrapper">
                <Button type="submit" value="bourbon" onClick={handleClick}>
                  <Img src="../../../images/bourbon.png" alt="bourbon"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Bourbon</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="scotch" onClick={handleClick}>
                  <Img src="../../../images/scotch.png" alt="scotch"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Scotch</Label>
                </Button>
              </Wrapper>
            </Row>
            <Row>
              <Wrapper>
                <Button type="submit" value="brandy" onClick={handleClick}>
                  <Img src="../../../images/brandy.png" alt="brandy"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Brandy</Label>
                </Button>
              </Wrapper>
              <Wrapper className="center-wrapper">
                <Button type="submit" value="cognac" onClick={handleClick}>
                  <Img src="../../../images/cognac.png" alt="cognac"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Cognac</Label>
                </Button>
              </Wrapper>
              <Wrapper>
                <Button type="submit" value="champagne" onClick={handleClick}>
                  <Img src="../../../images/champagne.png" alt="champagne"></Img>
                  <Label style={theme === 'dark' ? {color: '#31d0aa'} : {}}>Champagne</Label>
                </Button>
              </Wrapper>
            </Row>
          </Content>
          <Heading>
            <H2 id="heading"  style={theme === 'dark' ? {color: '#c4bfb7'} : {}}>Select For A List Of Cocktails.</H2>
          </Heading>
        </Container>
      ) : (
        <Mybarlist>
          <ReloadDiv style={theme === 'dark' ? {backgroundColor: '#181a1b'} : {}}>
            <Reload type="button" onClick={reload} style={theme === 'dark' ? {background: 'none'} : {}}>Go Back</Reload>
          </ReloadDiv>
          <Cocktails style={theme === 'dark' ? {backgroundColor: '#181a1b'} : {}}>
            <DisplayCocktail cocktails={cocktailsByAlcohol} theme={theme} />
          </Cocktails>
        </Mybarlist>
      )}
    </>
  );
};

export default MyBar;
