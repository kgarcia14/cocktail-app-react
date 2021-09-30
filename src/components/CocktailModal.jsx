import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: #31d0aa;
  margin: 150px 0 0 0;
`;

const H3 = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: #393939;
  margin: 0 0 20px 0;
`;

const Container = styled.div`
  margin: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  color: #393939;
`;

const InstructionWrapper = styled.div`
  margin: 10px 0 0 0;
`;

const Label = styled.label`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #393939;
`;

const Span = styled.span`
  color: #31d0aa;
  margin-left: 8px;
`;

const ModalBtn = styled.button`
  border: none;
  background: none;
  font-size: 1.2rem;
  color: #31d0aa;
  margin-left: 10px;

`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  button: "1.2rem",
};

const CocktailModal = ({ cocktail, errorMessage }) => {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = async (cocktail) => {
    setOpen(true);
    console.log(cocktail);
    console.log(cocktailDetails);

    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
      )
      .then((res) => {
        const data = res.data.drinks[0];
        setCocktailDetails(data);
        console.log(cocktailDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      {cocktailDetails === null ? (
        <H4>{errorMessage}</H4>
      ) : (
        <div>
          <ModalBtn onClick={() => handleOpen(cocktail)}>View Details</ModalBtn>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <Container>
                    <H3>{cocktailDetails.strDrink}</H3>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure1}</Span>
                      <P>{cocktailDetails.strIngredient1}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure2}</Span>
                      <P>{cocktailDetails.strIngredient2}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure3}</Span>
                      <P>{cocktailDetails.strIngredient3}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure4}</Span>
                      <P>{cocktailDetails.strIngredient4}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure5}</Span>
                      <P>{cocktailDetails.strIngredient5}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure6}</Span>
                      <P>{cocktailDetails.strIngredient6}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure7}</Span>
                      <P>{cocktailDetails.strIngredient7}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure8}</Span>
                      <P>{cocktailDetails.strIngredient8}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure9}</Span>
                      <P>{cocktailDetails.strIngredient9}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure10}</Span>
                      <P>{cocktailDetails.strIngredient10}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure11}</Span>
                      <P>{cocktailDetails.strIngredient11}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure12}</Span>
                      <P>{cocktailDetails.strIngredient12}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure13}</Span>
                      <P>{cocktailDetails.strIngredient13}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure14}</Span>
                      <P>{cocktailDetails.strIngredient14}</P>
                    </Wrapper>
                    <Wrapper>
                      <Span>{cocktailDetails.strMeasure15}</Span>
                      <P>{cocktailDetails.strIngredient15}</P>
                    </Wrapper>
                    <InstructionWrapper>
                      <Label>Instructions</Label>
                      <P>{cocktailDetails.strInstructions}</P>
                    </InstructionWrapper>
                  </Container>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CocktailModal;
