import React from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import Background from './Background';

function Home()
{
    return (
        <Container>
            <MediaQuery minWidth={480}>
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
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Background />
                <Section>
                    <Wrap style={{ paddingRight: '20px', marginLeft: '-130px', marginTop: '-10px' }}>
                        <ItemText>
                            <TextH1 style={{ fontSize: '22px' }}><h1>Hi, I'm</h1></TextH1>
                            <TextH1 style={{ fontSize: '22px', lineHeight: 0 }}><h1>Ariana Daris</h1></TextH1>
                            <TextH3 style={{ fontSize: '18px', marginTop: '50px', marginBottom: '60px', lineHeight: '40px' }}>A UX/UI Designer who wants to<br></br>make the Internet feel more like home.</TextH3>
                        </ItemText>
                        <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
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
            </MediaQuery>
        </Container>
    );
}

export default Home;

const appearKey = keyframes`
    0%
    {
        opacity: 0;
    }
    100%
    {
        opacity: 100%;
    }
`

const Container = styled.div`
    width: 100%;
    height: 85vh;
    position: absolute;
    overflow: hidden;
    margin-top: 15vh;
    opacity: 0;
    animation: 1s ease-out 0.5s 1 ${appearKey};
    animation-fill-mode: forwards;
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
    &:hover
    {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.35);
        background-color: #80C3C3;
    }

    border: none;
    background-color: #7DB6A6;
    margin-right: 50px;
    padding: 5px;
    border-radius: 20%;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.2s ease;
`

const Wrap = styled.div`
    z-index: 100;
    padding: 40px 0 0 165px;
`

const Section = styled.div`
    height: 100vh;
`
