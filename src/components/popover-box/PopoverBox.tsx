import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { borderRadius, spacing, colors } from '@styles/theme';

interface PopoverBoxProps {
    children: ReactElement;
}

const Container = styled.div`
    padding: ${spacing(4)};

    border-radius: ${borderRadius('lg')};
    border: 1px solid ${colors('gray', 200)};
    background-color: ${colors('white')};
`;

export const PopoverBox: React.FC<PopoverBoxProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default PopoverBox;
