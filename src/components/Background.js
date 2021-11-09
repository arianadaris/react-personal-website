import React from 'react';
import styled, {keyframes} from 'styled-components';
import {ReactComponent as Waves1} from '../images/Waves1.svg';
import {ReactComponent as Waves2} from '../images/Waves2.svg';
import {ReactComponent as Waves} from '../images/Waves.svg'
import MediaQuery from 'react-responsive';

function Background()
{
    return (
        <Container>
            <MediaQuery minWidth={480}>
                <Wrapper className='main'>
                    <Wrapper className='wave1'>
                        <StyledWave1 />
                    </Wrapper>
                    <Wrapper className='wave2'>
                        <StyledWave2 />
                    </Wrapper>
                </Wrapper>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
            <Wrapper className='main'>
                <Wrapper className='wave'>
                    <StyledWave />
                </Wrapper>
            </Wrapper>
            </MediaQuery>
        </Container>
    )
}

export default Background;


const Container = styled.div`
    .main
    {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .wave1
    {
        width: 50%;
        height: 100%;
        position: relative;
    }

    .wave2
    {
        width: 50%;
        height: 100%;
        position: relative;
    }

    .wave
    {
        width: 100%;
        height: 100%;
        position: relative;
        object-fit: contain;
        overflow: hidden;
    }

    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    position: fixed;
`

const slide = keyframes`
    0%
    {
        transform: scaleX(1);
    }
    50%
    {
        transform: scaleX(1.3);
    }
    100%
    {
        transform: scaleX(1);
    }
`

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
`

const StyledWave1 = styled(Waves1)`
    position: absolute;
    bottom: 0;
    animation-name: ${slide};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

const StyledWave2 = styled(Waves2)`
    position: absolute;
    bottom: 0;
    right: -10%;
    animation-name: ${slide};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

const StyledWave = styled(Waves)`
    position: absolute;
    bottom: 0;
    right: 0;
    animation-name: ${slide};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`