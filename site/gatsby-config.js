require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-theme-faunadb`,
      options: {
        faunaClientKey: process.env.GATSBY_FAUNA_CLIENT_KEY,
      },
    },
  ],
};
