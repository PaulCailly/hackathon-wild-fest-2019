import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import { fontWeight, fontFamily } from '@styles/theme';

import Button from '@components/button/Button';

export interface PopoverBoxContent {
    title: string;
    linkTo: string;
}

const Title = styled.div`
    font-weight: ${fontWeight('medium')};
    font-family: ${fontFamily('sans')};
`;

const PopoverBoxContent: React.FC<PopoverBoxContent> = ({ title, linkTo }) => (
    <div>
        <Title>{title}</Title>
        {linkTo && (
            <Link to={linkTo}>
                <Button>Visiter</Button>
            </Link>
        )}
    </div>
);

export default PopoverBoxContent;
