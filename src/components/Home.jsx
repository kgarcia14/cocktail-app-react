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
    color: #393939;
    margin: 0 20px;

    @media (min-width: 360px) {
        font-size: 2.5rem;
    }

    @media (min-width: 414px) {
        font-size: 2.7rem;
        margin: 0 40px;
    }

}
`;

const ImgWrapper = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
`;

const Img = styled.img `
    width: 450px;

    @media (min-width: 360px) {
        width: 475px;
    }

    @media (min-width: 414px) {
        width: 500px;
    }
`;

const Home = () => {
    return ( 
        <Container className="home-container">
            <H1 className="home-h1">Discover A World Of Delicious Cocktails.</H1>
            <ImgWrapper className="home-img-wrapper">
                <Img src="../../../images/astronaut.svg" className="home-img"></Img>
            </ImgWrapper>
        </Container>
     );
}
 
export default Home;