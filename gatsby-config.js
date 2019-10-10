/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    siteMetadata: {
        title: `Go Visit`,
        description: `Go Visit app for Wild Fest 2019 Hackathon`,
        author: `Paul Cailly`,
        social: {
            twitter: 'fromuxtocode',
            github: 'PaulCailly',
        },
    },
    plugins: [
        `gatsby-plugin-typescript`,
        'gatsby-plugin-emotion',
        `gatsby-plugin-react-helmet`,

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Go Visit`,
                short_name: `Go Visit`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4299e1`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
