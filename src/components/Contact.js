import React from 'react';
import Footer from './Footer';
import Background from './Background';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';

function Contact()
{
    return (

        <Container>
            <Background />
            <MediaQuery minWidth={480}>
                <Section>
                    <Wrap>
                        <TextH1>CONTACT ME</TextH1>
                        <TextH3>Let's Create Something Together!</TextH3>
                        <ButtonGroup>
                            <a href="mailto:arianarajewski@gmail.com" style={{ textDecoration: 'none' }}>
                                <EmailBtn>
                                    <img src="https://img.icons8.com/material-rounded/35/FFFFFF/mail.png"/>
                                    <ImgH1 className="mail">E-mail me!</ImgH1>
                                </EmailBtn>
                            </a>
                            <a href="https://www.instagram.com/arianadaris/" target="_blank" rel="noreferrer">
                                <InstaBtn>
                                    <img src="https://img.icons8.com/material-outlined/35/FFFFFF/instagram-new--v1.png" alt="Instagram"/>
                                    <ImgH1 className="insta">My Instagram!</ImgH1>
                                </InstaBtn>
                            </a>
                            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <GitHubBtn>
                                    <img src="https://img.icons8.com/material-outlined/35/FFFFFF/github.png" alt="GitHub"/>
                                    <ImgH1 className="github">My GitHub!</ImgH1>
                                </GitHubBtn>
                            </a>
                            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <LinkedBtn>
                                    <img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/linkedin.png" alt="LinkedIn"/>
                                    <ImgH1 className="linked">My LinkedIn!</ImgH1>
                                </LinkedBtn>
                            </a>
                        </ButtonGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section>
                    <Wrap style={{ marginTop: '30px'}}>
                        <TextH1 style={{ fontSize: '24px', marginLeft: '10%' }}>CONTACT ME</TextH1>
                        <TextH3 style={{ fontSize: '32px', lineHeight: '50px', marginLeft: '10%' }}>Let's Create</TextH3>
                        <TextH3 style={{ fontSize: '32px', lineHeight: '50px', marginLeft: '10%' }}>Something Together!</TextH3>
                        <ButtonGroup style={{ display: 'flex', justifyContent: 'center', marginLeft: '30px' }}>
                            <a href="mailto:arianarajewski@gmail.com" style={{ textDecoration: 'none' }}>
                                <EmailBtn style={{ backgroundColor: 'transparent' }}>
                                    <img src="https://img.icons8.com/material-rounded/35/FFFFFF/mail.png" alt="Email" style={{ marginRight: '20px'}}/>
                                    <ImgH1 className="mail">E-mail me!</ImgH1>
                                </EmailBtn>
                            </a>
                            <a href="https://www.instagram.com/arianadaris/" target="_blank" rel="noreferrer">
                                <InstaBtn style={{ backgroundColor: 'transparent' }}>
                                    <img src="https://img.icons8.com/material-outlined/35/FFFFFF/instagram-new--v1.png" alt="Instagram" style={{ marginRight: '20px'}}/>
                                    <ImgH1 className="insta">My Instagram!</ImgH1>
                                </InstaBtn>
                            </a>
                            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <GitHubBtn style={{ backgroundColor: 'transparent' }}>
                                    <img src="https://img.icons8.com/material-outlined/35/FFFFFF/github.png" alt="GitHub" style={{ marginRight: '20px'}}/>
                                    <ImgH1 className="github">My GitHub!</ImgH1>
                                </GitHubBtn>
                            </a>
                            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <LinkedBtn style={{ backgroundColor: 'transparent' }}>
                                    <img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/linkedin.png" alt="LinkedIn" style={{ marginRight: '20px'}}/>
                                    <ImgH1 className="linked">My LinkedIn!</ImgH1>
                                </LinkedBtn>
                            </a>
                        </ButtonGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    );
}

export default Contact;

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
    height: auto;
    margin-top: 15vh;
    position: absolute;
    overflow: hidden;
    opacity: 0;
    animation: 1s ease-out 0s 1 ${appearKey};
    animation-fill-mode: forwards;
`

const Section = styled.div`
    height: auto;
    margin-top: 5%;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    z-index: 100;
`

const TextH1 = styled.h1`
    font-size: 26px;
    font-style: italic;
    color: #61B29C;
`

const TextH3 = styled.h3`
    font-size: 52px;
    font-weight: bold;
    line-height: 80px;
`

const ButtonGroup = styled.div`
    z-index: 20;
    padding: 50px;
    display: flex;
    justify-content: center;
`

const ImgH1 = styled.h1`
    color: #127173;
    font-size: 15px;
    text-align: center;
    margin-left: -50%;
    opacity: 0;
    transition: 0.2s all;
`

const Button = styled.button`
    img
    {
        background-color: #7DB6A6;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
        margin-right: 50px;
        padding: 5px;
        border-radius: 20%;
        transition: 0.2s ease;
    }

    &:hover img
    {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.35);
        background-color: #80C3C3;
        margin-top: -10px;
    }

    border: none;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease;
`

const EmailBtn = styled(Button)`
    &:hover .mail
    {
        margin-top: 15px;
        opacity: 100%;
    }
`
 
const InstaBtn = styled(Button)`
    &:hover .insta
    {
        margin-top: 15px;
        opacity: 100%;
    }
`
 
const GitHubBtn = styled(Button)`
    &:hover .github
    {
        margin-top: 15px;
        opacity: 100%;
    }
`
 
const LinkedBtn = styled(Button)`
    &:hover .linked
    {
        margin-top: 15px;
        opacity: 100%;
    }
`
 
