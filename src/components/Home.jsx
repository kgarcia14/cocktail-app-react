import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 568px) and (orientation: landscape) {
        height: 80vh;
        flex-direction: row;
    }
`;

const Button = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    margin: 25px 25px 0 0;
    font-size: 1rem;
    background: none;
    border: none;
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
        font-size: 5rem;
        padding: 0 185px;
    }

    @media screen and (min-width: 568px) and (orientation: landscape) {
        width: 60%;
        font-size: 2.25rem;
        margin: 0 0 0 50px;
    }

    @media screen and (min-width: 640px) and (orientation: landscape) {
        font-size: 2.25rem;
        padding: 25px;
        margin: 0 0 0 50px;
    }

    @media screen and (min-width: 667px) and (orientation: landscape) {
        padding: 0 50px;
    }

    @media screen and (min-width: 731px) and (orientation: landscape) {
        font-size: 2.8rem;
        padding: 0 20px;
    }

    @media screen and (min-width: 736px) and (orientation: landscape) {
        font-size: 3.2rem;
        padding: 0;
    }

    @media screen and (min-width: 823px) and (orientation: landscape) {
        font-size: 3rem;
        padding: 0 20px;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape) {
        font-size: 4rem;
        padding: 0 40px;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
        font-size: 5.5rem;
        padding: 0 50px;
    }
`;

const ImgWrapper = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: 320px) and (orientation: landscape) {
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

    @media screen and (min-width: 568px) and (orientation: landscape) {
        width: 85px;
        margin: 0 50px 20px 0;
    }

    @media screen and (min-width: 640px) and (orientation: landscape) {
        width: 100px;
        margin: 0 50px 0 0;
    }

    @media screen and (min-width: 667px) and (orientation: landscape) {
        margin-right: 60px;
    }

    @media screen and (min-width: 731px) and (orientation: landscape) {
        width: 110px;
    }

    @media screen and (min-width: 812px) and (orientation: landscape) {
        width: 110px;
        margin-bottom: 30px;
    }

    @media screen and (min-width: 1024px) and (orientation: landscape) {
        width: 200px;
        margin-right: 150px;
    }

    @media screen and (min-width: 1366px) and (orientation: landscape) {
        width: 250px;
        margin-right: 250px;
    }
    
`;

const Home = ({ theme, toggleTheme }) => {

    return ( 
        <Container className="home-container" style={theme === 'dark'? {backgroundColor: '#181a1b'} : {backgroundColor: '#fff'}}>
            <Button type="button" onClick={toggleTheme} style={theme === 'dark' ? {color: '#31d0aa'} : {color: '#6100FF'}}>{theme === 'dark' ? 'Go Light' : 'Go Dark'}</Button>
            <H1 className="home-h1" style={theme === 'dark'? {color: '#c4bfb7'} : {}}>Discover A World Of Delicious Cocktails.</H1>
            <ImgWrapper className="home-img-wrapper">
                <Img src="../../../images/testastronaut.svg" className="home-img"></Img>
            </ImgWrapper>
        </Container>
     );
}
 
export default Home;