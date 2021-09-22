import styled from "styled-components";

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

const Label = styled.label `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #393939;
`;

const Input = styled.input `
    width: 200px;
    height: 25px;
    border: none;
    background-color: #eee;
    border-radius: 5px;
`;

const H2 = styled.h2 `
    font-size: 2.2rem;
    font-weight: 500;
    padding: 0 50px;
    color: #393939;
    margin-top: 50px;
    text-align: center;
`;

const Search = () => {
    return (
        <Container>
            <Form>
                <Label>Search Cocktail
                    <Input type="text"></Input>
                </Label>
            </Form>

            <H2>Search for your favorite cocktail!</H2>
        </Container>
     );
}
 
export default Search;