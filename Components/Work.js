import React from 'react';
import styled, {keyframes} from 'styled-components';
import Footer from './Footer';
import Background from './Background';
import proj1 from '../images/PersonalWebsite.png';
import proj2 from '../images/MockPaletteWebsite.png';

function Work()
{
    return (
        <Container>
            <Background />
            <Section>
                <Wrap>
                    <TextH1>MY WORK</TextH1>
                    <TextH3>Personal Projects</TextH3>
                    <Grid>
                        <GridItem style={{ backgroundColor: 'rgb(128,195,195, 0.75)' }}>
                            <img className="projImage" src={proj1} alt="Personal Website Project" />
                            <TextItem>
                                <a href="https://github.com/arianadaris/react-personal-website" style={{ textDecoration: 'none' }}>
                                    <TextH2>Personal Website</TextH2>
                                </a>
                                <List>
                                    <ListItem>React</ListItem>
                                    <ListItem>JavaScript</ListItem>
                                    <ListItem>HTML/CSS</ListItem>
                                </List>
                            </TextItem>
                            <SeeMoreBtn>
                                <a href="https://github.com/arianadaris/react-personal-website">
                                    <img src="https://img.icons8.com/ios-glyphs/30/579EAF/arrow.png"/>
                                </a>
                            </SeeMoreBtn>
                        </GridItem>
                        <GridItem style={{ backgroundColor: 'rgb(128,195,195, 0.75)' }}>
                            <img className="projImage" src={proj2} alt="Mock Block Palette Project" />
                            <TextItem>
                                <a href="https://github.com/arianadaris/block-palettes" style={{ textDecoration: 'none' }}>
                                    <TextH2>Mock Block Palettes Website</TextH2>
                                </a>
                                <List>
                                    <ListItem>NodeJS</ListItem>
                                    <ListItem>JavaScript</ListItem>
                                    <ListItem>HTML/CSS</ListItem>
                                    <ListItem>MongoDB</ListItem>
                                </List>
                            </TextItem>
                            <SeeMoreBtn>
                                <a href="https://github.com/arianadaris/block-palettes">
                                    <img src="https://img.icons8.com/ios-glyphs/30/579EAF/arrow.png"/>
                                </a>
                            </SeeMoreBtn>
                        </GridItem>
                    </Grid>
                </Wrap>
            </Section>
            <Footer />
        </Container>
    );
}

export default Work;

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
`

const Wrap = styled.div`
    z-index: 100;
    padding: 10px 0 0 165px;
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

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-top: 20px;
`

const GridItem = styled.div`
    .projImage
    {
        width: 400px;
        height: 215px;
        object-fit: contain;
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
    }

    width: 100%;
    height: 300px;
    border-radius: 20px;
    margin: 40px 10px 10px 10px;
    padding: 0 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s all;
`

const TextItem = styled.div`
    width: 50%;
`

const TextH2 = styled.h2`
    font-size: 36px;
    margin-left: 10px;
    transition: 0.2s ease-in-out;

    &:hover
    {
        transform: scale(1.01);
        text-decoration: underline;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
`

const ListItem = styled.li`
    font-size: 16px;
    margin-right: 25px;
    margin-top: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
    font-weight: bold;
`

const glowKey = keyframes`
    0%
    {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    }
    100%
    {
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
    }
`

const SeeMoreBtn = styled.button`
    &:hover
    {
        transform: scale(1.05);
    }
    margin-left: 5px;
    width: 50px;
    height: 50px;
    background-color: white;
    border: none;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    animation: 5s ease-out 0s infinite ${glowKey};
`
