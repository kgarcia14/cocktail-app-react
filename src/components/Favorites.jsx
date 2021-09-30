import { useState } from "react";

const Favorites = () => {
    const [favoriteCocktails, setFavoriteCocktails] = useState([() => {
        const localData = localStorage.getItem('favorites');
        const initialState = JSON.parse(localData);
        return initialState;
      }]);
      
    return ( 
        <ul>
            {favoriteCocktails.map((favCocktail, index) => (
                <li key={index}>
                    {favCocktail.strDrink}
                </li>
            ))}
        </ul>
     );
}
 
export default Favorites;