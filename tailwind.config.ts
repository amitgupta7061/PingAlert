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
        // --- MODERN AURORA PALETTE ---
        // 'brand' - Deep Ocean Blue with vibrant accents
        brand: {
          '25': '#f0f9ff', // Lightest sky blue
          '50': '#e0f2fe', // Very light cyan
          '100': '#bae6fd', // Light sky blue
          '200': '#7dd3fc', // Medium sky blue
          '300': '#38bdf8', // Bright sky blue
          '400': '#0ea5e9', // Vivid blue
          '500': '#0284c7', // Deep ocean blue (primary)
          '600': '#0369a1', // Darker ocean blue
          '700': '#075985', // Deep navy blue
          '800': '#0c4a6e', // Very dark blue
          '900': '#083344', // Nearly black blue
          '950': '#0a1f2e'  // Darkest navy
        },

        // Modern Discord-inspired dark theme
        'discord-background': "#1a1b23", // Rich dark blue-gray
        'discord-brand-color': "#5865f2", // Discord's signature purple-blue
        'discord-gray': '#2c2f36', // Medium dark gray
        'discord-text': '#f2f3f5', // Clean white text
        'discord-timestamp': '#a3a6aa', // Subtle gray for timestamps

        // Premium dark background - deep charcoal with blue undertones
        'dark-background': "#0f0f14",

        // Sophisticated HSL color system
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
          DEFAULT: 'hsl(201 96% 32%)', // Deep ocean blue - professional yet vibrant
          foreground: 'hsl(0 0% 100%)' // Crisp white text
        },
        secondary: {
          DEFAULT: 'hsl(210 40% 96%)', // Ultra-light blue-gray
          foreground: 'hsl(210 15% 25%)' // Deep blue-gray text
        },
        muted: {
          DEFAULT: 'hsl(210 25% 97%)', // Whisper-light blue-white
          foreground: 'hsl(210 15% 50%)' // Balanced gray for muted content
        },
        accent: {
          DEFAULT: 'hsl(262 83% 58%)', // Electric purple - modern and eye-catching
          foreground: 'hsl(0 0% 100%)' // Clean white on purple
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)', // Vibrant red for alerts
          foreground: 'hsl(0 0% 100%)' // White text on red
        },
        border: 'hsl(214 32% 91%)', // Soft blue-gray border
        input: 'hsl(214 32% 91%)', // Matching input borders
        ring: 'hsl(201 96% 32%)', // Focus ring matches primary

        // Success and warning colors for better UX
        success: {
          DEFAULT: 'hsl(142 71% 45%)', // Fresh green
          foreground: 'hsl(0 0% 100%)'
        },
        warning: {
          DEFAULT: 'hsl(45 93% 47%)', // Warm amber
          foreground: 'hsl(45 30% 11%)'
        },

        // Enhanced chart colors for data visualization
        chart: {
          '1': 'hsl(201 96% 32%)',  // Primary blue
          '2': 'hsl(262 83% 58%)',  // Electric purple  
          '3': 'hsl(142 71% 45%)',  // Fresh green
          '4': 'hsl(45 93% 47%)',   // Warm amber
          '5': 'hsl(348 83% 47%)',  // Coral red
          '6': 'hsl(193 82% 31%)',  // Teal
          '7': 'hsl(271 81% 56%)',  // Violet
          '8': 'hsl(29 94% 54%)',   // Orange
        },

        // Gradient stops for modern effects
        gradient: {
          'aurora-start': 'hsl(201 96% 32%)',
          'aurora-middle': 'hsl(262 83% 58%)',
          'aurora-end': 'hsl(193 82% 31%)',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Modern box shadows for depth
      boxShadow: {
        'aurora': '0 0 40px -10px hsl(201 96% 32% / 0.3)',
        'aurora-lg': '0 0 60px -15px hsl(201 96% 32% / 0.4)',
        'glow': '0 0 20px -5px hsl(262 83% 58% / 0.5)',
      },
      // Subtle animations
      animation: {
        'aurora': 'aurora 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px -5px hsl(262 83% 58% / 0.5)' },
          '100%': { boxShadow: '0 0 25px -5px hsl(262 83% 58% / 0.7)' },
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
export default config