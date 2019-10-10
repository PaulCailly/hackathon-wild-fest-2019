/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { spacing, colors, fontSize } from '@styles/theme';

import Popover from 'react-tiny-popover';
import PopoverBox from '@components/popover-box/PopoverBox';

import styled from '@emotion/styled';
import CheckpointPopover from '@components/checkpoint-popover/CheckpointPopover';

interface CheckpointProps {
    index: number;
    title: string;
    anecdote?: string;
    lat: number;
    lng: number;
}

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${spacing(8)};
    width: ${spacing(8)};

    border-radius: 50%;
    background-color: ${colors('red', 500)};

    color: ${colors('white')};
    font-size: ${fontSize('lg')};
`;

const Checkpoint: React.FC<CheckpointProps> = ({ index, title, anecdote }) => {
    const [open, setOpen] = useState(false);
    const handleOnClick: () => void = () => setOpen(!open);

    return (
        <Popover
            isOpen={open}
            position={'top'}
            content={
                <PopoverBox>
                    <CheckpointPopover title={title} anecdote={anecdote} />
                </PopoverBox>
            }
        >
            <Circle onClick={handleOnClick}>
                <div>{index + 1}</div>
            </Circle>
        </Popover>
    );
};

export default Checkpoint;
