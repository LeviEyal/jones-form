import { TextField, InputAdornment } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function PhoneTextField({ handleChange }) {
	return (
		<TextField
			name="phone"
			id="outlined-basic"
			label="Phone Number"
			variant="outlined"
			size="small"
			style={{ width: "100%" }}
			onChange={handleChange}
			required
			inputProps={{
				inputMode: "numeric",
				pattern: "[0-9]*",
				title: "Only numbers are allowed",
				minLength: "10",
				maxLength: "10",
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<LocalPhoneIcon />
					</InputAdornment>
				),
			}}
		/>
	);
}
