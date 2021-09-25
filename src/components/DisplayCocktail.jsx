import styled from "styled-components";

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Li = styled.li`
`;

const Img = styled.img`
    width: 85%;
`;

const DisplayCocktail = ({ cocktails }) => {
    return (
        <Ul>
            {cocktails.map(cocktail => (
                <Li key={cocktail.idDrink}>
                    <Img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <p>{cocktail.strDrink}</p>
                </Li>
            ))}
        </Ul>
     );
    
}
 
export default DisplayCocktail;