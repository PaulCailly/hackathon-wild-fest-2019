import React from 'react';

import styled from '@emotion/styled';
import { spacing, colors, fontSize, boxShadow } from '@styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'gatsby';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    position: fixed;
    bottom: 0;

    width: 100%;
    height: ${spacing(12)};

    box-shadow: ${boxShadow('lg')};
`;

const Box = styled.div`
    background-color: ${colors('white')};
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${colors('gray', 400)};

    font-size: ${fontSize('xl')};
`;

const Topbar: React.FC = () => {
    return (
        <Container>
            <Box>
                <StyledLink to="/" activeStyle={{ color: colors('blue', 500) }}>
                    <FontAwesomeIcon icon={['fas', 'list']} fixedWidth={true} />
                </StyledLink>
            </Box>
            <Box>
                <StyledLink to="/map" activeStyle={{ color: colors('blue', 500) }}>
                    <FontAwesomeIcon icon={['fas', 'street-view']} fixedWidth={true} />
                </StyledLink>
            </Box>
            <Box>
                <StyledLink to="/profile" activeStyle={{ color: colors('blue', 500) }}>
                    <FontAwesomeIcon icon={['fas', 'user']} fixedWidth={true} />
                </StyledLink>
            </Box>
        </Container>
    );
};

export default Topbar;
