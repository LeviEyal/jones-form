import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	Card,
	Typography,
	LinearProgress,
} from "@mui/material";

import { PageContainer } from "../components";
import config from "../config/config";

const LEADS_LIST_URL = `${config.leadServerUrl}/leads`;

/**
 * @component Displays the list of all stored leads
 */
export default function AllLeadsListPage() {
	const [leads, setLeads] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchLeads = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(LEADS_LIST_URL);
			const data = await response.json();
			setLeads(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchLeads();
	}, []);

	return (
		<PageContainer>
			<Card elevation={5} sx={{ mt: 3, p: 5 }}>
				<Typography variant="h4">Stored Leads</Typography>
				<Typography variant="h6">
					Link to server API to get all stored leads:
				</Typography>
				<Typography variant="h6">
					<a href={LEADS_LIST_URL}>{LEADS_LIST_URL}</a>
				</Typography>

				<TableContainer sx={{ minWidth: 800 }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell sx={{ fontWeight: 700 }}>First Name</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Last Name</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{leads.map((lead) => (
								<TableRow key={lead?.id}>
									<TableCell>{lead["first name"]}</TableCell>
									<TableCell>{lead["last name"]}</TableCell>
									<TableCell>{lead["email"]}</TableCell>
									<TableCell>{lead["phone"]}</TableCell>
								</TableRow>
							))}
							{
								isLoading && (
									<TableRow>
										<TableCell colSpan={4}>
											<LinearProgress />
										</TableCell>
									</TableRow>
								)
							}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>
		</PageContainer>
	);
}
