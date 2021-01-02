require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-theme-chakra`,
    {
      resolve: `gatsby-theme-faunadb`,
      options: {
        faunaClientKey: process.env.FAUNA_CLIENT_KEY,
      },
    },
  ],
};
