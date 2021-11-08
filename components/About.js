import React from 'react';
import styled, {keyframes} from 'styled-components';
import Footer from './Footer';
import Background from './Background';
import MediaQuery from 'react-responsive';

function About()
{
    return (
        <Container>
            <Background />
            <MediaQuery minWidth={480}>
                <Section>
                    <Wrap>
                        <TextH1>ABOUT ME</TextH1>
                        <TextH3>Hi, I'm Ariana!</TextH3>
                        <TextP style={{ fontStyle: 'italic' }}>A quick fun fact about me, my full name is Ariana Daris Rajewski. Daris is my middle name!</TextP>
                        <TextP>I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a Bachelor's Degree in Computer Science with a concentration in Software Engineering in December of 2022.</TextP>
                        <TextP>In my free time, I enjoy learning about UX/UI and front end libraries. Lately, I have been learning about NodeJS with a personal project (linked on my GitHub).</TextP>
                        <TextP>Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in JavaScript, LUA and C# (Unity/Visual Studio).</TextP>
                    </Wrap>
                </Section>
                <Footer />
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section style={{ marginTop: '-25px', paddingBottom: '75px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)' }}>
                    <Wrap style={{ marginLeft: 0, marginRight: 0, backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <TextH1 style={{ fontSize: '24px' }}>ABOUT ME</TextH1>
                        <TextH3 style={{ fontSize: '36px', marginTop: '-15px', marginBottom: '-15px' }}>Hi, I'm Ariana!</TextH3>
                        <TextP style={{ fontStyle: 'italic', fontSize: '18px' }}>A quick fun fact about me, my full name is Ariana Daris Rajewski. Daris is my middle name!</TextP>
                        <TextP style={{ fontSize: '18px' }}>I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a Bachelor's Degree in Computer Science with a concentration in Software Engineering in December of 2022.</TextP>
                        <TextP style={{ fontSize: '18px' }}>In my free time, I enjoy learning about UX/UI and front end libraries. Lately, I have been learning about NodeJS with a personal project (linked on my GitHub).</TextP>
                        <TextP style={{ fontSize: '18px' }}>Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in JavaScript, LUA and C# (Unity/Visual Studio).</TextP>
                    </Wrap>
                </Section>
                <Footer/>
            </MediaQuery>
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
    background-color: rgba(255, 255, 255, 0.8);
    margin-left: 5%;
    margin-right: 55%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
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
    .i
    {
        color: red;
    }

    margin-top: 30px;
    font-size: 22px;
    font-weight: 400;
`
