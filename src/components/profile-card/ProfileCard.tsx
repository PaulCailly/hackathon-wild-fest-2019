import React from 'react';

import styled from '@emotion/styled';
import { spacing, colors, fontFamily, fontSize } from '@styles/theme';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors('gray', 200)};
    border-bottom: ${colors('gray', 300)} 1px solid;
    padding: ${spacing(8)};
    width: 100%;
`;

const Picture = styled.div`
    height: 120px;
    width: 120px;
    margin-bottom: ${spacing(3)};

    border-radius: 50%;
    background-image: url('./stephane-bern.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

const Name = styled.div`
    font-family: ${fontFamily('sans')};
    font-size: ${fontSize('xl')};
    margin-bottom: ${spacing(1)};
`;

const Title = styled.div`
    font-family: ${fontFamily('sans')};
    font-size: ${fontSize('sm')};
`;

const ProfileCard: React.FC = () => {
    return (
        <Container>
            <Picture />
            <Name>Stéphane Bern</Name>
            <Title>Fervent défenseur du Patrimoine</Title>
        </Container>
    );
};

export default ProfileCard;
