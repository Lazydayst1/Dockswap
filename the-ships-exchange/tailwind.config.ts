import type { Config as TailwindConfig } from 'tailwindcss';

type ConfigWithSafelist = TailwindConfig & {
  safelist?: string[];
};

const config: ConfigWithSafelist = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  safelist: [
    'animate-wave',
    'animate-tentacle',
    'animate-blink',
    'animate-bubble',
  ],

  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(-5px) translateX(0)' },
          '75%': { transform: 'translateY(-10px) translateX(-10px)' },
        },
        tentacle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(2deg) scale(1.02)' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
      },

      animation: {
        wave: 'wave 18s ease-in-out infinite',
        tentacle: 'tentacle 12s ease-in-out infinite',
        blink: 'blink 7s ease-in-out infinite',
        bubble: 'bubble 10s linear infinite',
      },
    },
  },

  plugins: [],
};

export default config;