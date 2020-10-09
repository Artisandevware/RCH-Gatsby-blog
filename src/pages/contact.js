import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Contact() {
	return (
		<div style={{ color: "white" }}>
			<Link to="/">Home</Link>
			<Header headerText="Contact" />
			<p>Send me a message!</p>
			
			<h1>I'd love to talk! Email me at the address below</h1>
			<p>
				<a href="mailto:me@example.com">me@example.com</a>
			</p>
    
		</div>
	);
}
