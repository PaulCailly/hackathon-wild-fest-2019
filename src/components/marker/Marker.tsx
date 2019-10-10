import React, { useState } from 'react';
import Popover from 'react-tiny-popover';

import styled from '@emotion/styled';
import { spacing, colors, fontSize } from '@styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PopoverBox from '@components/popover-box/PopoverBox';
import MarkerPopover from '@components/marker-popover/MarkerPopover';
import { Color } from '@styles/theme/helpers/colors/colors';

export interface MarkerProps {
    title: string;
    color: Color;
    type: string;
    linkTo: string;
}

const Circle = styled.div<{ color: Color }>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: ${spacing(12)};
    width: ${spacing(12)};

    color: ${colors('white')};
    font-size: ${fontSize('xl')};

    border-radius: 50%;
    border: white 1px solid;
    background-color: ${props => colors(props.color, 500)};
`;

const renderIcon: (type: string) => JSX.Element = (type: string) => {
    switch (type) {
        case 'jardin':
            return <FontAwesomeIcon icon={['fas', 'leaf']} fixedWidth={true} />;

        case 'religious':
            return <FontAwesomeIcon icon={['fas', 'church']} fixedWidth={true} />;

        case 'water':
            return <FontAwesomeIcon icon={['fas', 'water']} fixedWidth={true} />;

        default:
        case 'castle':
            return <FontAwesomeIcon icon={['fab', 'fort-awesome']} fixedWidth={true} />;
    }
};

const Marker: React.FC<MarkerProps> = ({ title, color, type, linkTo }) => {
    const [open, setOpen] = useState(false);
    const handleOnClick: () => void = () => setOpen(!open);

    return (
        <div>
            <Popover
                isOpen={open}
                position={'top'}
                content={
                    <PopoverBox>
                        <MarkerPopover title={title} linkTo={linkTo} />
                    </PopoverBox>
                }
            >
                <Circle color={color} onClick={handleOnClick}>
                    {renderIcon(type)}
                </Circle>
            </Popover>
        </div>
    );
};

export default Marker;
