import React from 'react';
import styled, {keyframes} from 'styled-components';
import {ReactComponent as Waves1} from '../images/Waves1.svg';
import {ReactComponent as Waves2} from '../images/Waves2.svg';

function Background()
{
    return (
        <Bg>
            <Waves1Wrap>
                <MoveWaves1 />
            </Waves1Wrap>
            <Waves2Wrap>
                <MoveWaves2 />
            </Waves2Wrap>
        </Bg>
    )
}

export default Background;


const Bg = styled.div`
    height: auto;
    position: fixed;
    padding-top: 300px;
    z-index: -1;
`

const Waves1Wrap = styled.div`
    position: relative;
    margin-top: -175px;
    z-index: -1;
`

const Waves2Wrap = styled.div`
    position: relative;
    margin-top: -1025px;
    margin-left: 550px;
    z-index: -1;
`

const waveMotion = keyframes`
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

const MoveWaves1 = styled(Waves1)`
    animation-name: ${waveMotion};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

const MoveWaves2 = styled(Waves2)`
    animation-name: ${waveMotion};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
