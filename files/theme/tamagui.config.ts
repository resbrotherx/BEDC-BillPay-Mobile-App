import { createTamagui } from 'tamagui'
import { config as defaultConfig } from '@tamagui/config/v3'

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes: {
    light: {
      background: '#ffffff',
      color: '#000000',
      primary: '#00E5FF',
      ai: '#8B5CF6',
    },
    dark: {
      background: '#000000',
      color: '#ffffff',
      primary: '#00E5FF',
      ai: '#8B5CF6',
    },
    color: {
      primary: '#00E5FF',
      glass: 'rgba(255,255,255,0.15)',
      ai: '#8B5CF6',
    },
    space: {
      sm: 8,
      md: 16,
      lg: 24,
    },
  },
})
