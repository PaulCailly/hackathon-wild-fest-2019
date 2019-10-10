import React from 'react';

import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { global } from '@styles/global';
import normalize from 'emotion-normalize';
import { ThemeProvider, theme, colors } from '@styles/theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import {
    faStreetView,
    faLeaf,
    faWater,
    faChurch,
    faList,
    faMapMarkerAlt,
    faUser,
    faLocationArrow,
    faStar,
} from '@fortawesome/free-solid-svg-icons';

import Topbar from '@components/topbar/Topbar';

library.add(
    faStreetView,
    faLeaf,
    faWater,
    faChurch,
    faList,
    faMapMarkerAlt,
    faFortAwesome,
    faUser,
    faLocationArrow,
    faStar,
);

const Container = styled.div`
    height: 100vh;
`;
const Main = styled.main`
    position: relative;
    height: calc(100vh - 48px);
    width: 100%;

    background-color: ${colors('gray', 200)};

    overflow: scroll;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    ${normalize}
                    ${global}
                `}
            />
            <Container>
                <Topbar />
                <Main>{children}</Main>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
