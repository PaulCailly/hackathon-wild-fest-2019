import React from 'react';

import styled from '@emotion/styled';
import { spacing } from '@styles/theme';

import Item from '@components/visited-list/item/Item';

import { PointOfInterest } from '@data/pointsOfInterest';

const Container = styled.div`
    & > div + div {
        margin-top: ${spacing(4)};
    }
`;

const VisitedList: React.FC<{ visitedPointsOfInterest: PointOfInterest[] }> = ({ visitedPointsOfInterest }) => {
    return (
        <Container>
            {visitedPointsOfInterest.map((point, index) => (
                <Item key={index} {...point} />
            ))}
        </Container>
    );
};

export default VisitedList;
