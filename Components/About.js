import React from 'react';
import styled, {keyframes} from 'styled-components';
import Footer from './Footer';
import Background from './Background';
import personal from '../images/Personal.jpg';

function About()
{
    return (
        <Container>
            <Background />
            <Section>
                <Wrap>
                    <TextH1>ABOUT ME</TextH1>
                    <TextH3>Hi, I'm Ariana!</TextH3>
                    <TextP>I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a Bachelor's Degree in Computer Science with a concentration in Software Engineering in December of 2022.</TextP>
                    <TextP>In my free time, I enjoy learning about UX/UI and front end libraries. Lately, I have been learning about NodeJS with a personal project (linked on my GitHub).</TextP>
                    <TextP>Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in JavaScript, LUA and C# (Unity/Visual Studio).</TextP>
                </Wrap>
            </Section>
            <Footer />
        </Container>
    );
}

export default About;

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
    display: flex;
`

const Wrap = styled.div`
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.6);
    margin-left: 5%;
    margin-right: 55%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
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

const TextP = styled.p`
    margin-top: 30px;
    font-size: 22px;
    font-weight: 400;
`
