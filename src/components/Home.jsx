import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-height: 280px) and (orientation: landscape) {
        flex-direction: row;
    }
`;

const H1 = styled.h1 `
    font-size: 2.2rem;
    font-weight: 500;
    color: #393939;
    margin: 0 20px 30px 20px;

    @media screen and (min-width: 360px) {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 411px) {
        font-size: 2.7rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 4rem;
        padding: 0 80px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 4.5rem;
        padding: 0 185px;
    }

    @media screen and (min-height: 280px) and (orientation: landscape) {
        width: 100%;
        font-size: 2.5rem;
        margin: 0 0 0 70px;
        padding: 0;
    }

    @media screen and (min-height: 320px) and (orientation: landscape) {
        width: 60%;
        font-size: 2.25rem;
        margin: 0 0 0 50px;
    }

    @media screen and (min-height: 360px) and (orientation: landscape) {
        font-size: 2.25rem;
        padding: 20px;
        margin: 0 0 0 50px;
    }

    @media screen and (min-height: 375px) and (orientation: landscape) {
        padding: 30px;
    }

    @media screen and (min-height: 411px) and (orientation: landscape) {
        font-size: 2.8rem;
        padding: 0 20px;
    }

    @media screen and (min-height: 768px) and (orientation: landscape) {
        font-size: 4rem;
    }

    @media screen and (min-height: 1024px) and (orientation: landscape) {
        font-size: 5rem;
        padding: 0 75px;
    }

    @media screen and (min-width: 812px) and (max-height: 375px) and (orientation: landscape) {
        font-size: 2.7rem;
        padding: 0  50px;
    }

    @media screen and (min-width: 823px) and (max-height: 411px) and (orientation: landscape) {
        padding: 0  50px;
    }
`;

const ImgWrapper = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;

    @media screen and (min-height: 320px) and (orientation: landscape) {
        width: 40%;
    }
`;

const Img = styled.img `
    width: 100px;
    margin-bottom: 20px;

    @media screen and (min-width: 360px) {
        width: 120px;
    }

    @media screen and (min-width: 360px) {
        width: 125px;
    }

    @media screen and (min-width: 411px) {
        width: 145px;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
    }

    @media screen and (min-width: 1024px) {
        width: 235px;
    }

    @media screen and (min-height: 280px) and (orientation: landscape) {
        width: 85px;
        margin: 0 50px 20px 0;
    }

    @media screen and (min-height: 360px) and (orientation: landscape) {
        width: 100px;
        margin: 0 50px 0 0;
    }

    @media screen and (min-height: 414px) and (orientation: landscape) {
        width: 120px;
    }

    @media screen and (min-height: 768px) and (orientation: landscape) {
        width: 200px;
        margin-right: 150px;
    }

    @media screen and (min-height: 1024px) and (orientation: landscape) {
        width: 230px;
        margin-right: 220px;
    }

    @media screen and (min-width: 812px) and (max-height: 375px) and (orientation: landscape) {
        margin-right: 150px;
    }

    @media screen and (min-width: 823px) and (max-height: 411px) and (orientation: landscape) {
        width: 120px;
        margin-right: 125px;
    }
    
`;

const Home = () => {
    return ( 
        <Container className="home-container">
            <H1 className="home-h1">Discover A World Of Delicious Cocktails.</H1>
            <ImgWrapper className="home-img-wrapper">
                <Img src="../../../images/testastronaut.svg" className="home-img"></Img>
            </ImgWrapper>
        </Container>
     );
}
 
export default Home;