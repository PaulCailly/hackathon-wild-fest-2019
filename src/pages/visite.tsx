/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import GoogleMapReact from 'google-map-react';

import styled from '@emotion/styled';
import { spacing } from '@styles/theme';

import Layout from '@components/layout/Layout';
import Checkpoint from '@components/checkpoint/Checkpoint';
import User from '@components/user/User';
import Button from '@components/button/Button';

import visiteCheckpoints from '@data/visiteCheckpoints';

const ButtonContainer = styled.div`
    position: absolute;
    bottom: ${spacing(2)};
    padding: ${spacing(4)};
    width: 100%;

    display: flex;
    justify-content: center;
`;

const MapPage: React.FC<GeolocatedProps> = ({ isGeolocationAvailable, isGeolocationEnabled, coords }) => {
    const [coordinates, setCoordinates] = useState();

    const handleSetCoordinates: Function = (coords: Coordinates | undefined) => setCoordinates(coords);

    useEffect(() => {
        handleSetCoordinates(coords);
    }, [coords]);

    return (
        <Layout>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'INSERT_YOUR_API_HERE' }}
                defaultCenter={{
                    lat: 48.4927027,
                    lng: 1.090378,
                }}
                defaultZoom={16}
            >
                {visiteCheckpoints.map((point, index) => (
                    <Checkpoint key={index} index={index} {...point} />
                ))}
                {isGeolocationAvailable && isGeolocationEnabled && coordinates && (
                    <User lat={coordinates.lat} lng={coordinates.lng} />
                )}
            </GoogleMapReact>
            <ButtonContainer>
                <Link to="/profile">
                    <Button>Terminer la visite</Button>
                </Link>
            </ButtonContainer>
        </Layout>
    );
};

export default geolocated({
    userDecisionTimeout: 5000,
})(MapPage);
