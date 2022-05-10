import { TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function NameTextField({ handleChange, label = "Name" }) {
	return (
		<TextField
			name={label.toLowerCase()}
			id="outlined-basic"
			label={label}
			variant="outlined"
			size="small"
			style={{ width: "100%" }}
			onChange={handleChange}
			required
			inputProps={{
				inputMode: "text",
				pattern: "[a-zA-Z ]*",
				title: "Only alphabets are allowed",
				minLength: "2",
			}}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<AccountCircle />
					</InputAdornment>
				),
			}}
		/>
	);
}
