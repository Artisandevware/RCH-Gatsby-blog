import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
	return (
		<Layout location={location} title={siteTitle}>
			<div style={{ color: "white" }}>
				<Link to="/contact/">Contact</Link>
				<Link to="/about/">About</Link>
				<Link to="/blog/">Blog</Link>
				<div style={{ margin: "3rem auto", maxWidth: 600 }}>
					<Header headerText="Hello Gatsby!" />
					<p>What a world.</p>
					<img src="https://source.unsplash.com/random/400x200" alt="" />
				</div>
			</div>
		</Layout>
	);
}