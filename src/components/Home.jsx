import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1 `
    font-size: 2.2rem;
    font-weight: 500;
    padding: 0 20px;
    color: #393939;
    margin: 0;
`;

const ImgWrapper = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
`;

const Img = styled.img `
    width: 450px;
`;

const Home = () => {
    return ( 
        <Container>
            <H1>Discover A World Of Delicious Cocktails.</H1>
            <ImgWrapper>
                <Img src="../../../images/astronaut.svg"></Img>
            </ImgWrapper>
        </Container>
     );
}
 
export default Home;