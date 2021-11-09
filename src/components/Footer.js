import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

function Footer()
{
    return (
        <Container>
            <MediaQuery minWidth={480}>
                <Section>
                    <Wrap>
                        <TextH3>arianarajewski@gmail.com</TextH3>
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
                <Section>
                    <Wrap style={{ display: 'block' }}>
                        <TextH3 style={{ fontSize: '16px', textAlign: 'center', marginTop: '-100px' }}>arianarajewski@gmail.com</TextH3>
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
                                <Button style={{ marginRight: '-10px'}}>
                                    <img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/linkedin.png" alt="LinkedIn"/>
                                </Button>
                            </a>
                        </ButtonGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: 15vh;
    margin-top: 15vh;
`

const Section = styled.div`
    height: auto;
`

const Wrap = styled.div`
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 80px;
    padding-right: 80px;
`

const TextH3 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
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