import styled from 'styled-components';
import { useState, useEffect } from "react";
import CocktailModal from './CocktailModal';

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0 50px;
  margin: 150px 0 0 0;
  color: #393939;
  text-align: center;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Li = styled.li`
    list-style-type: none;
    display: flex;
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
  align-items: flex-start;
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
`;



const Favorites = ({errorMessage}) => {
    const localData = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log(localData);
    const [favoriteCocktails, setFavoriteCocktails] = useState(localData);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteCocktails))
        
      }, [favoriteCocktails])

    const handleDelete = (id) => {
        console.log(id);
        const filteredList = favoriteCocktails.filter((cocktail) => cocktail.idDrink !== id)
        console.log(filteredList);
        setFavoriteCocktails(filteredList);
    }

    return ( 
        <>
            {favoriteCocktails.length < 1 ? (
                <H2>Go and add some cocktails to your favorites</H2>
            ) : (
            <Ul>
                {favoriteCocktails.map((cocktail) => (
                    <Li key={cocktail.idDrink}>
                        <ImgWrapper>
                            <H3>{cocktail.strDrink}</H3>
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
        </>
     );
}
 
export default Favorites;