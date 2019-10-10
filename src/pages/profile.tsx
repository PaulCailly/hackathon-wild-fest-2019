/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { spacing, fontFamily, fontWeight } from '@styles/theme';

import Layout from '@components/layout/Layout';
import CongratsBox from '@components/congrats-box/CongratsBox';
import ProfileCard from '@components/profile-card/ProfileCard';
import ProfileProgress from '@components/profile-progress/ProfileProgress';
import VisitedList from '@components/visited-list/VisitedList';

import pointsOfInterest, { PointOfInterest } from '@data/pointsOfInterest';

const Container = styled.div`
    padding: ${spacing(4)};
`;

const Subtitle = styled.div`
    font-family: ${fontFamily('sans')};
    margin-bottom: ${spacing(2)};
    font-weight: ${fontWeight('medium')};
`;

const Profile: React.FC = () => {
    const initalXp = 640;
    const initalLevel = 41;
    const initalVisitedPointsOfInterest = [...pointsOfInterest].splice(1, 3);

    const [xp, setXp] = useState(initalXp);
    const [level, setLevel] = useState(initalLevel);
    const [visitedPointsOfInterest, setVisitedPointsOfInterest] = useState(initalVisitedPointsOfInterest);
    const [display, setDisplay] = useState(false);

    const addVisitedPointsOfInterest: (pointOfInterest: PointOfInterest) => void = pointOfInterest =>
        setVisitedPointsOfInterest(visitedPointsOfInterest => [pointOfInterest, ...visitedPointsOfInterest]);

    // This usage of useEffect hooks should be refactored and do not respect best pratices

    useEffect(() => {
        setTimeout(() => {
            setXp(1000);
            addVisitedPointsOfInterest(pointsOfInterest[0]);
        }, 1500);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setXp(0);
        }, 2500);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setXp(400);
            setLevel(42);
        }, 3200);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 4200);
    }, []);

    return (
        <Layout>
            <CongratsBox display={display} setDisplay={setDisplay} />
            <ProfileCard />

            <Container>
                <Subtitle>Progression</Subtitle>
                <ProfileProgress xp={xp} level={level} />
                <Subtitle>Dernières visites</Subtitle>
                <VisitedList visitedPointsOfInterest={visitedPointsOfInterest} />
            </Container>
        </Layout>
    );
};

export default Profile;
