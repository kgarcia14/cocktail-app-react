import styled from 'styled-components';
import { useState, useEffect } from "react";
import CocktailModal from './CocktailModal';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 568px) and (orientation: landscape) {
      height: 50vh;
  }

  @media screen and (min-width: 812px) and (orientation: landscape) {
      margin: 0;
      height: 90vh;
  }
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0 10px;
  color: #393939;
  text-align: center;

  @media screen and (min-width: 360px) {
    font-size: 2.3rem;
    margin: 150px 15px 0 15px;
    color: #393939;
    text-align: center;
    }

  @media screen and (min-width: 375px) {
    font-size: 2.5rem;
    margin: 150px 25px 25px;
    color: #393939;
    text-align: center;
    }

  @media screen and (min-width: 411px) {
    padding: 0 20px;
    }

  @media screen and (min-width: 414px) {
    font-size: 2.7rem;
    padding: 0 25px;
    }

    @media screen and (min-width: 568px) and (orientation: landscape) {
      font-size: 2.4rem;
  }

    @media screen and (min-width: 812px) and (orientation: landscape) {
      padding: 0 80px;
      margin: 0;
  }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin: 30px 0 90px 0;

    @media screen and (min-width: 568px) and (orientation: landscape) {
    width: 50%
    }
`;

const Li = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const ImgWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 5px 0 30px 0;
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  color: #393939;
  letter-spacing: 1.8px;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #f35c5c;
  font-size: 1rem;
  margin-right: 10px;
`;

const Favorites = ({errorMessage, theme}) => {
    const localData = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log(localData);
    const [favoriteCocktails, setFavoriteCocktails] = useState(localData);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteCocktails))
        
        window.scrollTo(0, 0)

      }, [favoriteCocktails])

    const handleDelete = (id) => {
        console.log(id);
        const filteredList = favoriteCocktails.filter((cocktail) => cocktail.idDrink !== id)
        console.log(filteredList);
        setFavoriteCocktails(filteredList);
    }

    return ( 
        <Container>
            {favoriteCocktails.length < 1 ? (
                <Heading>
                  <H2 style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>Add Some Cocktails To Your Favorites!</H2>
                </Heading>
            ) : (
            <Ul>
                {favoriteCocktails.map((cocktail) => (
                    <Li key={cocktail.idDrink}>
                        <ImgWrapper>
                            <H3 style={theme === 'dark' ? {color: '#c4bfb7'} : {color: '#393939'}}>{cocktail.strDrink}</H3>
                            <Img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <ImgContent>
                              <CocktailModal cocktail={cocktail} errorMessage={errorMessage} />
                              <Button type="button" onClick={() => handleDelete(cocktail.idDrink)}>Remove</Button>
                            </ImgContent>
                        </ImgWrapper>
                    </Li>
                ))}
            </Ul>
            )}
        </Container>
     );
}
 
export default Favorites;
