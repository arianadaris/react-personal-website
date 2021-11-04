import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Background from './Background';

function Work()
{
    return (
        <Container>
            <Background />
            <Section>
                <Wrap>
                    <TextH1>MY WORK</TextH1>
                    <TextH3>Personal Work</TextH3>
                    <Grid>
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                        <GridItem />
                    </Grid>
                </Wrap>
            </Section>
            <Footer />
        </Container>
    );
}

export default Work;

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

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin-top: 20px;
`

const GridItem = styled.div`
    width: 450px;
    height: 450px;
    background: rgba(255,255,255,0.2);
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    border-radius: 20px;
    margin: 20px 10px 10px 10px;
`