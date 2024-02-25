import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
      theme: {
        extend: {
          keyframes: {
            colorChange: {
              from: { color: 'initial' },
              to: { color: 'green' },
            },
          },
          animation: {
            'color-change': 'colorChange 1s infinite alternate',
          },
        },
      },
  plugins: [],
};
export default config;
