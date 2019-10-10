import React, { ReactElement, ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { borderRadius, spacing, fontFamily, fontWeight, colors } from '@styles/theme';

interface ButtonProps {
    children: string | Element | ReactElement;
}

export type T = any;

const StyledButton = styled.button<ButtonProps>`
    display: block;
    padding: ${spacing(4)};
    margin-top: ${spacing(4)};

    width: 100%;
    max-width: 60vw;

    text-align: center;
    color: ${colors('white')};
    font-family: ${fontFamily('sans')};
    font-weight: ${fontWeight('medium')};

    border: none;
    border-radius: ${borderRadius('lg')};
    background-color: ${colors('blue', 500)};
`;

export const Button: React.FC<ButtonHTMLAttributes<T> & ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
