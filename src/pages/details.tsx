import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import { spacing, colors, fontSize, lineHeight, fontWeight, fontFamily } from '@styles/theme';

import Layout from '@components/layout/Layout';
import Button from '@components/button/Button';

import pointsOfInterest from '@data/pointsOfInterest';
import visiteCheckpoints from '@data/visiteCheckpoints';

const Image = styled.div`
    position: relative;
    width: 100%;
    height: 220px;

    background-image: url('./1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Container = styled.div`
    padding: ${spacing(4)};
    font-family: ${fontFamily('sans')};
    line-height: ${lineHeight('loose')};
`;

const Title = styled.div`
    font-size: ${fontSize('lg')};
    font-weight: ${fontWeight('bold')};
`;

const OpeningHoursContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${spacing(4)};
    font-family: ${fontFamily('sans')};
`;

const Label = styled.div`
    color: ${colors('green', 600)};
    line-height: ${lineHeight('tight')};
    padding-right: ${spacing(4)};
    max-width: 100px;
`;

const OpeningHours = styled.div`
    border-left: 1px solid ${colors('gray', 300)};
    padding-left: ${spacing(4)};
`;

const Subtitle = styled.div`
    font-weight: ${fontWeight('bold')};
`;

const Description = styled.div`
    margin-bottom: ${spacing(4)};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const DetailsPage: React.FC<{}> = () => {
    const { title, description, openingHours } = pointsOfInterest[0];

    return (
        <Layout>
            <Image />
            <Container>
                <Title>{title}</Title>

                <OpeningHoursContainer>
                    <Label>Ouvert en ce moment</Label>
                    <OpeningHours>{openingHours}</OpeningHours>
                </OpeningHoursContainer>

                <Subtitle>En bref</Subtitle>
                <Description>{description}</Description>
                <Subtitle>Au programme</Subtitle>
                <ul>
                    {visiteCheckpoints.map((point, key) => (
                        <li key={key}>{point.title}</li>
                    ))}
                </ul>
                <ButtonContainer>
                    <Link to="visite">
                        <Button>Commencer la visite</Button>
                    </Link>
                </ButtonContainer>
            </Container>
        </Layout>
    );
};

export default DetailsPage;
