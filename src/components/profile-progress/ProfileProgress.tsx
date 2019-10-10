import React from 'react';

import styled from '@emotion/styled';
import { spacing, colors, fontFamily, fontWeight, borderRadius } from '@styles/theme';

interface ProfileProgressProps {
    xp: number;
    level: number;
}

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${spacing(2)};

    font-family: ${fontFamily('sans')};
    font-weight: ${fontWeight('medium')};
`;

const ProgressBarContainer = styled.div`
    position: relative;
    background-color: ${colors('gray', 300)};
    height: 24px;
    width: 100%;
    margin-bottom: ${spacing(4)};
    border-radius: ${borderRadius('lg')};
`;

const ProgressBar = styled.div<{ xp: number }>`
    position: relative;
    width: ${props => (props.xp / 1000) * 100}%;
    height: 24px;

    border-radius: ${borderRadius('lg')};
    background-color: ${colors('blue', 500)};

    opacity: ${props => (props.xp === 0 ? 0 : 1)};

    transition: opacity ease 0.8s;
    transition: width ease 1s;
`;

const ProfileProgress: React.FC<ProfileProgressProps> = ({ xp, level }) => {
    return (
        <div>
            <Row>
                <div>Niveau {level}</div>
                <div>{xp}/1000 XP</div>
            </Row>
            <ProgressBarContainer>
                <ProgressBar xp={xp} />
            </ProgressBarContainer>
        </div>
    );
};

export default ProfileProgress;
