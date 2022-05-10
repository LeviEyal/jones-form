import { Box } from "@mui/material";

export default function PageContainer({ children }) {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			{children}
		</Box>
	);
}
