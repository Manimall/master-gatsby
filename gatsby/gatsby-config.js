module.exports = {
  plugins: [
    'gatsby-plugin-ts-config',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{ts,tsx}',
          customOptions: {
            fix: true,
            cache: false,
          },
        },
      },
    },
  ],
};
