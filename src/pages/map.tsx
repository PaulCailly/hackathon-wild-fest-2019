import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';

import Layout from '@components/layout/Layout';
import Marker from '@components/marker/Marker';
import User from '@components/user/User';

import pointsOfInterest from '@data/pointsOfInterest';

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
                    lat: 47.7976577,
                    lng: 0.7965972,
                }}
                defaultZoom={8}
            >
                {pointsOfInterest.map((point, index) => (
                    <Marker key={index} {...point} />
                ))}
                {isGeolocationAvailable && isGeolocationEnabled && coordinates && (
                    <User lat={coordinates.lat} lng={coordinates.lng} />
                )}
            </GoogleMapReact>
        </Layout>
    );
};

export default geolocated({
    userDecisionTimeout: 5000,
})(MapPage);
