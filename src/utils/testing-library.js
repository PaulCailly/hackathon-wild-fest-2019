import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ThemeProvider } from 'emotion-theming';
import { theme } from '@styles/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faTwitter, faHeart);

const AllTheProviders = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const renderWithAllProviders = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { renderWithAllProviders as render };
