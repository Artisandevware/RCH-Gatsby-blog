import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function About() {
	return (
		<div style={{ color: "teal" }}>
			<div><Link to="/contact/">Contact</Link> </div>

			<div><Link to="/about/">About</Link></div>

			<div><Link to="/blog/">Blog</Link> </div>
			<div style={{ margin: "3rem auto", maxWidth: 600 }}>
				<Header headerText="About Gatsby" />
				<Header headerText="It's pretty cool" />
				<p>Nice!!</p>
			</div>
			
		</div>
	);
}