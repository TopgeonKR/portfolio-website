import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // src 내부의 모든 파일을 대상으로 함
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
