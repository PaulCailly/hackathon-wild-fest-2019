import React from 'react';

import styled from '@emotion/styled';
import { spacing, borderRadius, fontSize, fontFamily, fontWeight, colors } from '@styles/theme';

import { PointOfInterest } from '@data/pointsOfInterest';

const Container = styled.div`
    display: flex;
`;

const Image = styled.div<{ imageUrl: string }>`
    position: relative;
    width: 70px;
    height: 70px;

    border-radius: ${borderRadius('lg')};
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.imageUrl});
`;

const InnerContainer = styled.div`
    padding: 0 ${spacing(4)};

    font-size: ${fontSize('sm')};
    font-family: ${fontFamily('sans')};
`;

const Title = styled.div`
    margin-bottom: ${spacing(2)};

    font-weight: ${fontWeight('medium')};
`;

const VisitedData = styled.div`
    color: ${colors('gray', 700)};
`;

const Item: React.FC<PointOfInterest> = ({ title, imageUrl }) => {
    return (
        <Container>
            <Image imageUrl={imageUrl} />
            <InnerContainer>
                <Title>{title}</Title>
                <VisitedData>Visité le 01/01/2019</VisitedData>
            </InnerContainer>
        </Container>
    );
};

export default Item;
