/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {

			"accent": "var(--accent)",
			"accent-2": "var(--accent-2)",
			"white":"#ffffff",
			"black":"#000000"
		}
	},
	plugins: [],
}
