import type { Config } from "tailwindcss";

interface ThemeFunction {
  (path: string, defaultValue?: string): string;
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        code: "#CC3627",
      },
      typography: (theme: ThemeFunction) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'code': {
              color: '#CC3627',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              lineHeight: 'inherit',
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              fontFamily: theme('fontFamily.mono'),
              wordWrap: 'break-word',
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
            'ol': {
              '& > li::marker': {
                color: theme('colors.white'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

// Cores do atalho Ctrl + E no Notion (trecho de código laranja)
// #CC3627
// #CB5757
