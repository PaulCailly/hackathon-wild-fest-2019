import React from 'react';

import { spacing, colors, fontSize } from '@styles/theme';
import styled from '@emotion/styled';

const OutterCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${spacing(6)};
    width: ${spacing(6)};

    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
`;

const InnerCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${spacing(4)};
    width: ${spacing(4)};

    color: ${colors('white')};
    font-size: ${fontSize('lg')};

    border: ${colors('white')} 3px solid;
    border-radius: 50%;
    background-color: ${colors('blue', 500)};
`;

export interface UserProps {
    lat: number;
    lng: number;
}

const User: React.FC<UserProps> = () => {
    return (
        <OutterCircle>
            <InnerCircle />
        </OutterCircle>
    );
};

export default User;
