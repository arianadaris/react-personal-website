import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Background from './Background';

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

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 15vh;
    position: absolute;
    overflow: hidden;
`

const Section = styled.div`
    height: auto;
`

const Wrap = styled.div`
    z-index: 100;
    padding: 10px 0 0 165px;
`

const TextH1 = styled.h1`
    font-size: 32px;
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
    margin-right: 60%;
    font-weight: 400;
`

const Span = styled.div`
    margin-top: 40px;
`

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`

`
