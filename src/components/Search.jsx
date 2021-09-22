import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

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

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;

  const _handleSubmit = (e) => {
    e.preventDefault();
    axios.get(url)
        .then((res) => {
            console.log(res);
            console.log(res.data.drinks[0].strInstructions)
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            
        });
        
        setInputValue('');
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

      <H2>Search for your favorite cocktail!</H2>
    </Container>
  );
};

export default Search;
