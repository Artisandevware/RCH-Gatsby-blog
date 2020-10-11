module.exports = {
	siteMetadata: {
		location: "Arizona",
		title: "Russell's Portfolio and Sandbox Site",
		author: {
			name: "Russell Hrycko",
			summary: "who lives and works in Arizona making \"stuff\".",
		},
		description: "A portfolio site that shows what I've been up to or am working on now.",
		siteUrl: "https://russell.zone/",
		social: {
			twitter: "russell_hrycko",
		},
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/content/blog`,
				name: "blog",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/content/assets`,
				name: "assets",
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 630,
						},
					},
					{
						resolve: "gatsby-remark-responsive-iframe",
						options: {
							wrapperStyle: "margin-bottom: 1.0725rem",
						},
					},
					"gatsby-remark-prismjs",
					"gatsby-remark-copy-linked-files",
					"gatsby-remark-smartypants",
				],
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		"gatsby-plugin-feed",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Russell's Portfolio",
				short_name: "RCH Portfolio",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "content/assets/RCH-favicon.ico",
			},
		},
		"gatsby-plugin-react-helmet",
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
