import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";

const Container = styled.div`
  display: flex;
  height: 75vh;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #393939;
  position: fixed;
  top: 0;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  border: none;
  background-color: #eee;
  border-radius: 5px;
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0 50px;
  color: #393939;
  margin-top: 50px;
  text-align: center;
`;

const CocktailContainer = styled.div``;

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getCocktailByName = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      )
      .then((res) => {
        const data = res.data.drinks;
        console.log(res);
        console.log(res.data.drinks);
        setCocktails(data);

        if (data === null) {
          setErrorMessage("Please enter a valid cocktail!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getCocktailId = () => {

  // }

  // const getCocktailDetails = () => {

  // }

  const _handleSubmit = (e) => {
    e.preventDefault();
    getCocktailByName();

    setInputValue("");

    const heading = document.querySelector("#heading");

    heading.classList.add("hidden");
  };

  return (
    <Container>
      <Form onSubmit={_handleSubmit}>
        <Label>
          Search Cocktail
          <Input
            type="text"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Label>
      </Form>

      <H2 id="heading">Search for your favorite cocktail!</H2>
      
        {cocktails === null ? (
          <h4>{errorMessage}</h4>
        ) : (
          <div>
          <DisplayCocktail cocktails={cocktails} />
          </div>
        )}
        
    </Container>
  );
};

export default Search;
