module.exports = {
  presets: [
    {
      theme: {
        extend: [],
      },
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Inter',
        heading: '"Plus Jakarta Sans"',
      },
    },
  },
  content: [
    './src/pug/*.pug',
    './src/html/*.html',
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};

