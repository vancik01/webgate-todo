/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#EFF1FF",
				primary: "#0040B4",
			},
			boxShadow: {
				boxShadow: "2px 4px 12px rgba(217, 217, 217, 0.54)",
			},
		},
	},
	plugins: [],
};
