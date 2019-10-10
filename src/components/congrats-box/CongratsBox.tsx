import React from 'react';

import styled from '@emotion/styled';
import { spacing, borderRadius, fontFamily, fontSize, fontWeight, colors, lineHeight } from '@styles/theme';
import Fireworks from '@styles/svg/fireworks/Fireworks';

import Button from '@components/button/Button';

export interface CongratsBoxProps {
    display: boolean;
    setDisplay: Function;
}

const Backdrop = styled.div<{ display: boolean }>`
    position: fixed;
    height: 100vh;
    width: 100vw;

    background-color: rgba(0, 0, 0, 0.7);

    opacity: ${props => (props.display ? 1 : 0)};
    z-index: ${props => (props.display ? 100 : -1)};
    transition: opacity ease 1s;
`;

const Box = styled.div<{ display: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: ${spacing(4)};
    width: 70%;

    border-radius: ${borderRadius('lg')};
    background-color: white;

    z-index: ${props => (props.display ? 110 : -2)};
`;

const SVGContainer = styled.div`
    width: 75%;
    margin: ${spacing(8)} auto;
`;

const Title = styled.div`
    margin-bottom: ${spacing(4)};

    text-align: center;
    font-family: ${fontFamily('sans')};
    font-size: ${fontSize('lg')};
    font-weight: ${fontWeight('medium')};
`;

const Message = styled.div`
    font-family: ${fontFamily('sans')};
    text-align: center;
    color: ${colors('gray', 700)};
    line-height: ${lineHeight('relaxed')};
    margin-bottom: ${spacing(8)};
`;

const CongratsBox: React.FC<CongratsBoxProps> = ({ display, setDisplay }) => {
    return (
        <Backdrop display={display}>
            <Box display={display}>
                <SVGContainer>
                    <Fireworks />
                </SVGContainer>
                <Title>Félicitations !</Title>
                <Message>
                    Vous avez atteint le <b>niveau 42</b> et vous recevez une entrée gratuite pour le{' '}
                    <b>Musée du Louvre</b>
                </Message>
                <Button onClick={() => setDisplay(false)}>Récupérer l&apos;invitation</Button>
            </Box>
        </Backdrop>
    );
};

export default CongratsBox;
