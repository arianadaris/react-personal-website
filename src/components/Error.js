import React from 'react';
import styled, {keyframes} from 'styled-components';
import Footer from './Footer';
import Background from './Background';
import MediaQuery from 'react-responsive';

function Error()
{
    return (
        <Container>
            <Background />
            <MediaQuery minWidth={480}>
                <Section>
                    <TextH1>ERROR 404</TextH1>
                    <TextH3>Page Not Found</TextH3>
                    <TextP>Not too sure where that one went... Was it ever really here?</TextP>
                    <a href="/"><Button>Return to Home</Button></a>
                </Section>
                <Footer />
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Footer />
            </MediaQuery>
        </Container>
    );
}

export default Error;

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
    margin-top: 20px;
    margin-left: 100px;
    padding-bottom: 100px;
`

const TextH1 = styled.h1`
    font-size: 26px;
    font-style: italic;
    color: #61B29C;
`

const TextH3 = styled.h3`
    font-size: 48px;
    font-weight: bold;
    line-height: 80px;
`

const TextP = styled.p`
    margin-top: 40px;
    font-size: 24px;
    font-style: italic;
`

const Button = styled.button`
    &:hover
    {
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15), inset 3px 3px 6px rgba(0, 0, 0, 0.15);
        background-color: rgba(0, 0, 0, 0.015);
    }

    border: none;
    background-color: white;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
    padding: 10px;
    font-size: 24px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 120px;
    transition: 0.1s ease;
`