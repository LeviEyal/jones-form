let config =
	process.env.NODE_ENV === "production"
		? {
				leadServerUrl: "https://jones-leads.herokuapp.com",
		  }
		: {
				leadServerUrl: "http://localhost:4000",
		  };

export default config;
