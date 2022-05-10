import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontFamily: "Montserrat Alternates, sans-serif",
		fontWeightMedium: 500,
	},
	palette: {
		primary: {
			main: "#3f51b5",
			light: "#7986cb",
			dark: "#303f9f",
			contrastText: "#fff",
		},
		secondary: {
			main: "#ff4081",
			light: "#ff79b4",
			dark: "#c51162",
			contrastText: "#fff",
		},
		error: {
			main: "#f44336",
			light: "#e57373",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		warning: {
			main: "#ff9800",
			light: "#ffb74d",
			dark: "#f57c00",
			contrastText: "#fff",
		},
		info: {
			main: "#2196f3",
			light: "#64b5f6",
			dark: "#1976d2",
			contrastText: "#fff",
		},
		success: {
			main: "#4caf50",
			light: "#81c784",
			dark: "#388e3c",
			contrastText: "#fff",
		},
	},
});

export default theme;