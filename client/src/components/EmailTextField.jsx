import { TextField, InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function EmailTextField({ handleChange }) {
	return (
		<TextField
			name="email"
			id="outlined-basic"
			label="Mail Address"
			variant="outlined"
			size="small"
			style={{ width: "100%" }}
			onChange={handleChange}
			required
			inputProps={{
				inputMode: "email",
				pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
				title: "Please enter a valid email address",
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<AlternateEmailIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}
