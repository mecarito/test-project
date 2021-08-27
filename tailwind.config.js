module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                secondary: "#2A585C",
            },
        },
    },
    variants: {
        extend: {
            ringColor: ["hover"],
        },
    },
    plugins: [],
};