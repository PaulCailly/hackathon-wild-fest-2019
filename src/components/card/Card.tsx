import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import { borderRadius, spacing, fontFamily, fontWeight, colors, fontSize } from '@styles/theme';
import { Color } from '@styles/theme/helpers/colors/colors';

export interface CardProps {
    title: string;
    color: Color;
    type: string;
    imageUrl: string;
    linkTo: string;
}

const StyledLink = styled(Link)`
    display: block;
`;

const BackgroundImage = styled.div<{ imageUrl: string }>`
    position: relative;
    width: 100%;
    height: 220px;

    border-radius: ${borderRadius('lg')};
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${spacing(2)} 0;
`;

const Title = styled.div`
    font-family: ${fontFamily('sans')};
    font-weight: ${fontWeight('medium')};
`;

const CategoryChip = styled.div<{ color: Color }>`
    padding: ${spacing(2)};

    color: ${colors('white')};
    font-family: ${fontFamily('sans')};
    font-size: ${fontSize('xxs')};
    font-weight: ${fontWeight('bold')};

    border-radius: ${borderRadius('lg')};
    background-color: ${props => colors(props.color, 500)};
`;

export const Card: React.FC<CardProps> = ({ title, color, type, imageUrl, linkTo }) => {
    return (
        <StyledLink to={linkTo}>
            <BackgroundImage imageUrl={imageUrl} />

            <Row>
                <Title>{title}</Title>
                <CategoryChip color={color}>{type}</CategoryChip>
            </Row>
        </StyledLink>
    );
};

export default Card;
