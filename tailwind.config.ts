import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          'var(--font-heading)',
          ...fontFamily.sans
        ]
      },
      colors: {
        // --- NEW ORANGE-DOMINANT PALETTE ---
        // 'brand' is now a custom Orange scale
        brand: {
          '25': '#fffaf0', // Very light creamy orange
          '50': '#fff0e0',
          '100': '#ffe0c0',
          '200': '#ffc299',
          '300': '#ffa670',
          '400': '#ff8a47',
          '500': '#ff6e1d', // A vibrant, clear orange
          '600': '#e05c0d',
          '700': '#bf4a00',
          '800': '#993a00',
          '900': '#7a2d00',
          '950': '#5c2000'
        },
        // Discord colors re-imagined for the warm, orange-dominant theme
        'discord-background': "#332e2c", // Dark warm gray/brown
        'discord-brand-color': "#e07a5f", // Muted terracotta orange
        'discord-gray': '#453f3d', // Slightly different dark warm gray
        'discord-text': '#f5f0ed', // Light creamy text
        'discord-timestamp': '#c2bbb6', // Medium warm gray

        // 'dark-background' is now a deep, rich brown (no black)
        'dark-background': "#1a1614",

        // Dynamic HSL colors for flexibility and dark mode (all new, no blue/black)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(25 90% 50%)', // Our main vibrant Orange
          foreground: 'hsl(0 0% 100%)' // White text for strong contrast
        },
        secondary: {
          DEFAULT: 'hsl(30 15% 90%)', // A soft, light, desaturated warm gray
          foreground: 'hsl(30 10% 20%)' // Deep brown-gray text
        },
        muted: {
          DEFAULT: 'hsl(30 10% 96%)', // Very light, subtle warm beige
          foreground: 'hsl(30 8% 45%)' // Medium warm gray for muted text
        },
        accent: {
          DEFAULT: 'hsl(350 80% 45%)', // A rich, deep red/maroon for strong accents
          foreground: 'hsl(0 0% 100%)' // White text on accent
        },
        destructive: {
          DEFAULT: 'hsl(0 75% 55%)', // A standard, impactful red for warnings/errors
          foreground: 'hsl(0 0% 100%)' // White text
        },
        border: 'hsl(30 10% 85%)', // A light, warm border
        input: 'hsl(30 10% 85%)', // Input border
        ring: 'hsl(25 90% 50%)', // Focus ring matches primary orange

        // Chart colors adjusted for harmony with the new warm palette
        chart: {
          '1': 'hsl(25 80% 45%)',  // Orange (Primary related)
          '2': 'hsl(50 90% 55%)',  // Golden Yellow
          '3': 'hsl(350 70% 50%)', // Rich Red (Accent related)
          '4': 'hsl(180 50% 40%)', // Muted Teal (a subtle, non-dominant cool contrast)
          '5': 'hsl(300 50% 50%)'  // Dusty Plum
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
export default config