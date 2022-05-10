import { useState } from "react";
import {
	Button,
	Stack,
	Typography,
	Card,
	LinearProgress,
	Alert,
	Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import axios from "axios";

import { EmailTextField, NameTextField, PageContainer, PhoneTextField } from "../components";
import config from "../config/config";

const StyledCard = styled(Card)({
	width: "50%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "1rem 5rem 5rem 5rem",
	borderRadius: "0.5rem",
	border: "1px solid #ccc",
	boxShadow: "0px 0px 5px #ccc",
	backgroundColor: "#fff",
	marginBottom: "1rem",
	marginTop: "2rem",
});

/**
 * @component Main page for the New Lead Form
 */
export default function NewLeadFormPage() {
	const [mailData, setMailData] = useState({});
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);

	/**
	 * @description Sets the Lead data to the state
	 */
	const handleSubmit = async (e) => {
		console.log("submit", mailData);
		e.preventDefault();
		setIsSending(true);
		setIsSent(false);
		try {
			const response = await axios.post(
				`${config.leadServerUrl}/newLead`,
				mailData
			);
			setIsSent(true);
			setIsSending(false);
			console.log(response);
		} catch (error) {
			setIsSending(false);
			setIsSent(false);
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setMailData({ ...mailData, [e.target.name]: e.target.value });
	};

	return (
		<PageContainer>
			<StyledCard elevation={10}>
				<img src="./jones_logo.png" alt="Jones" style={{ width: "100px" }} />
				<Typography variant="h4" mb={2}>
					Jones Form
				</Typography>
				<Typography variant="h6" mb={5}>
					Add your contact information below and we'll get back to you
				</Typography>
				<form
					style={{ width: "70%" }}
					encType="multipart/form-data"
					onSubmit={handleSubmit}
				>
					<Stack spacing={2}>
						<Stack
							spacing={2}
							style={{ width: "100%" }}
							direction="row"
							justifyContent="space-between"
						>
							<NameTextField label="First Name" handleChange={handleChange} />
							<NameTextField label="Last Name" handleChange={handleChange} />
						</Stack>

						<EmailTextField handleChange={handleChange} />
						<PhoneTextField handleChange={handleChange} />
						<Stack
							spacing={2}
							style={{ width: "100%" }}
							direction="row"
							justifyContent="space-between"
						>
							{!isSending ? (
								<Button
									variant="contained"
									color="primary"
									type="submit"
									style={{ width: "100%" }}
									startIcon={<ForwardToInboxIcon />}
								>
									Send
								</Button>
							) : (
								<Button
									disabled
									variant="contained"
									color="primary"
									type="submit"
									style={{ width: "100%" }}
									startIcon={<ForwardToInboxIcon />}
								>
									Sending...
								</Button>
							)}
							<Button
								variant="contained"
								color="secondary"
								type="reset"
								startIcon={<ClearAllIcon />}
								style={{ paddingInline: "20px" }}
							>
								Clear
							</Button>
						</Stack>
						{isSending && <LinearProgress />}
						<Snackbar
							open={isSent}
							autoHideDuration={4000}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "center",
							}}
						>
							<Alert
								onClose={() => setIsSent(false)}
								severity="success"
								sx={{ width: "100%" }}
							>
								Message sent successfully
							</Alert>
						</Snackbar>
					</Stack>
				</form>
			</StyledCard>
		</PageContainer>
	);
}
