import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Background from './Background';

function Home()
{
    return (
        <Container>
            <Background />
            <Section>
                <Wrap>
                    <ItemText>
                        <TextH1><h1>Hi, I'm Ariana Daris</h1></TextH1>
                        <TextH3>A UX/UI Designer who wants to<br></br>make the Internet feel more like home.</TextH3>
                    </ItemText>
                    <ButtonGroup>
                        <a href="https://www.instagram.com/arianadaris/" target="_blank" rel="noreferrer">
                            <Button>
                                <img src="https://img.icons8.com/material-outlined/35/FFFFFF/instagram-new--v1.png" alt="Instagram"/>
                            </Button>
                        </a>
                        <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                            <Button>
                                <img src="https://img.icons8.com/material-outlined/35/FFFFFF/github.png" alt="GitHub"/>
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                            <Button>
                                <img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/linkedin.png" alt="LinkedIn"/>
                            </Button>
                        </a>
                    </ButtonGroup>
                </Wrap>
            </Section>
            <Footer />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    width: 100%;
    height: 85vh;
    position: absolute;
    overflow: hidden;
    margin-top: 15vh;
`

const ItemText = styled.div`
    z-index: 20;
`

const TextH1 = styled.h1`
    font-size: 29px;
    font-weight: bold;
    margin-bottom: 20px;
`

const TextH3 = styled.h3`
    font-size: 32px;
    font-style: italic;
    font-weight: normal;
    line-height: 50px;
    margin-bottom: 40px;
`

const ButtonGroup = styled.div`
    z-index: 20;
`

const Button = styled.button`
    border: none;
    background-color: #7DB6A6;
    margin-right: 40px;
    padding: 5px;
    border-radius: 20%;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`

const Wrap = styled.div`
    z-index: 100;
    padding: 40px 0 0 165px;
`

const Section = styled.div`
    height: 100vh;
`