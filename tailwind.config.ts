import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				dark: {
					100: '#6C727F',
					200: '#282B30',
					300: '#1B1D1F',
				},
				checkbox: '#4E80EE',
				light: '#D2D5DA',
			},
		},

		container: {
			center: true,
		},
	},
	plugins: [],
};
export default config;
