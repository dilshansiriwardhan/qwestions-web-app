import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    
   },
  plugins: [nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            
            background: "#131314",
            foreground: "#BDC1C6",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#4C8DF6",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
            content3:"#1E1F20",
            content2:"#444746",
         },
      }}
   })],autoprefixer: {},
   darkMode: ['class'],
};
export default config;
