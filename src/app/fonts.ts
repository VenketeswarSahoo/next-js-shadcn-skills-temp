import localFont from 'next/font/local'

export const haffer = localFont({
  src: [
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/Font/haffer-font-family/Haffer-TRIAL-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-haffer',
})
