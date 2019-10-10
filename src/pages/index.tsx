import React from 'react';
import { geolocated } from 'react-geolocated';

import styled from '@emotion/styled';
import { colors, fontFamily, spacing, fontWeight, borderRadius } from '@styles/theme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '@components/layout/Layout';
import Card from '@components/card/Card';
import pointsOfInterest from '@data/pointsOfInterest';

const Header = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    padding: ${spacing(6)};
    width: 100%;
    z-index: 10;

    font-family: ${fontFamily('sans')};
    font-weight: ${fontWeight('medium')};

    border-radius: ${borderRadius('lg')};
    background-color: white;

    svg {
        color: ${colors('blue', 600)};
        margin-right: ${spacing(2)};
    }
`;

const Container = styled.div`
    height: 100%;
    padding: ${spacing(4)};
    padding-top: 66px;
    overflow: scroll;

    & > a + a {
        margin-top: ${spacing(8)};
    }
`;

const IndexPage: React.FC<{}> = () => {
    return (
        <Layout>
            <Header>
                <FontAwesomeIcon icon={['fas', 'location-arrow']} fixedWidth={true} />
                <span>Autour de moi</span>
            </Header>
            <Container>
                {pointsOfInterest.map((point, index) => {
                    const { title, color, type, imageUrl, linkTo } = point;

                    return (
                        <Card key={index} title={title} color={color} type={type} imageUrl={imageUrl} linkTo={linkTo} />
                    );
                })}
            </Container>
        </Layout>
    );
};

export default geolocated({
    userDecisionTimeout: 5000,
})(IndexPage);
