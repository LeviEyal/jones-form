import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

function App() {
	const [value, setValue] = useState(0);
	const location = useLocation();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		if (location.pathname === "/newLeadForm") {
			setValue(1);
		} else if (location.pathname === "/allLeadsList") {
			setValue(2);
		}
	}, [location.pathname]);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					onChange={handleChange}
				>
					<Tab label="Screenshots" component={Link} to="/screenshots" />
					<Tab label="New Lead Form" component={Link} to="/newLeadForm" />
					<Tab label="All Leads List" component={Link} to="/allLeadsList" />
				</Tabs>

				<Outlet />
			</ThemeProvider>
		</div>
	);
}

export default App;
