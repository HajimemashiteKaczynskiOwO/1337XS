import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { negrodicus } from './src/negrodicus'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    require('daisyui'), // <-- Changed from array to direct require
    skeleton({
      themes: {
        custom: [negrodicus],
      },
    }),
  ],
  // Add daisyUI config
  daisyui: {
    themes: false, // Disable daisyUI themes since you're using Skeleton
    logs: false,
    styled: true,
  }
}