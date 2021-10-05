import styled from "styled-components";
import CocktailModal from "./CocktailModal";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`
  margin: 100px 0 40px 0;
  width: 90%;

  @media screen and (min-width: 568px) and (orientation: landscape) {
    width: 40%;
    }
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  margin: 5px 0 5px 0;
`;

const ImgContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  color: #393939;
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    width: 35px;
    margin-right: 25px;
  }
`;


const DisplayCocktail = ({ cocktails, errorMessage, theme }) => {
  const localData = JSON.parse(localStorage.getItem('favorites') || '[]');

  const [favoriteCocktails, setFavoriteCocktails] = useState(localData);


  const handleAddFavorite = (cocktail) => {
    console.log(cocktail.strDrink, '...has been added to favorites!!!')
    setFavoriteCocktails([...favoriteCocktails, cocktail]);
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteCocktails))
  
  }, [favoriteCocktails])


  const ifExists = (id) => {
    if (favoriteCocktails.filter(favcocktail => favcocktail.idDrink === id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    const filteredList = favoriteCocktails.filter((cocktail) => cocktail.idDrink !== id)
    console.log(filteredList);
    setFavoriteCocktails(filteredList);
}
  
  return (
    <Container>
    <Ul>
      {cocktails.map((cocktail) => (
        <Li key={cocktail.idDrink} id={cocktail.idDrink}>
          <ImgWrapper>
            <H3 style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktail.strDrink}</H3>
            <Img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <ImgContent>
              <CocktailModal cocktail={cocktail} errorMessage={errorMessage} theme={theme}/>

              {ifExists(cocktail.idDrink) ? (
                <Button type="button" onClick={() => handleDelete(cocktail.idDrink)} ><Img src="../../../images/favorites.svg"></Img></Button>
              ) : (
                <Button type="button" onClick={() => handleAddFavorite(cocktail)}><Img src="../../../images/heart-outline.svg"></Img></Button>
              )}
            </ImgContent>
          </ImgWrapper>
        </Li>
      ))}
    </Ul>
    </Container>
  );
};

export default DisplayCocktail;
