import styled from "styled-components";
import CocktailModal from "./CocktailModal";

const Ul = styled.ul`
  margin: 75px 0 70px 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ImgContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
`;

const DisplayCocktail = ({ cocktails }) => {
  
  return (
    <Ul>
      {cocktails.map((cocktail) => (
        <Li key={cocktail.idDrink} id={cocktail.idDrink}>
          <ImgWrapper>
            <Img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <ImgContent>
              <P>{cocktail.strDrink}</P>
            </ImgContent>
          </ImgWrapper>
          
          <CocktailModal cocktail={cocktail} />
        </Li>
      ))}
    </Ul>
  );
};

export default DisplayCocktail;
