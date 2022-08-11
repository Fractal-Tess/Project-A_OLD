const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'../ui/**/*.{html,js,svelte,ts}',
		'../../apps/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
				code: ['Fira Code']
			},
			backgroundSize: {
				300: '300%'
			},
			// TODO: Make this more random and subtle
			keyframes: {
				'gradient-keyframes-x': {
					'0%': { 'background-position': 'left' },
					'100%': { 'background-position': 'right' }
				}
			},
			animation: {
				'gradient-animation-x':
					'gradient-keyframes-x 5s linear infinite alternate'
			}
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#e863d6',
					secondary: '#7bc3e0',
					accent: '#cd97fc',
					neutral: '#25343C',
					'base-100': '#F8F8FB',
					info: '#93BADC',
					success: '#12A168',
					warning: '#F4C857',
					error: '#DE3B4E'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#137cb5',
					secondary: '#e80d52',
					accent: '#f4cd73',
					neutral: '#1F1721',
					'base-100': '#2B3440',
					info: '#35B0F3',
					success: '#1B743C',
					warning: '#F38A12',
					error: '#F2215C'
				}
			}
		]
	},
	plugins: [daisyui]
};

module.exports = config;
