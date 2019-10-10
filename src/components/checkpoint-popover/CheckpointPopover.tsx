import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from '@emotion/styled';
import { fontWeight, fontFamily, spacing, colors } from '@styles/theme';

export interface CheckpointPopoverProps {
    title: string;
    anecdote?: string;
}

const Container = styled.div`
    font-family: ${fontFamily('sans')};
    max-width: 200px;
`;

const Title = styled.div`
    font-weight: ${fontWeight('medium')};
`;

const Content = styled.div`
    margin-top: ${spacing(4)};
`;

const Subtitle = styled.div`
    margin-bottom: ${spacing(2)};

    svg {
        color: ${colors('yellow', 400)};
        margin-right: ${spacing(2)};
    }
`;

const Anecdote = styled.div``;

const CheckpointPopover: React.FC<CheckpointPopoverProps> = ({ title, anecdote }) => (
    <Container>
        <Title>{title}</Title>
        {anecdote && (
            <Content>
                <Subtitle>
                    <FontAwesomeIcon icon={['fas', 'star']} fixedWidth={true} />
                    Le saviez vous ?
                </Subtitle>
                <Anecdote>{anecdote}</Anecdote>
            </Content>
        )}
    </Container>
);

export default CheckpointPopover;
