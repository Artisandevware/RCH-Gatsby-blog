import React from "react";
import {useStaticQuery, Link, graphql} from "gatsby";
import {NavWrapper} from "../elements/navElements";

export const Nav = () => {

	const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "RCH-favicon.ico"}){
          publicURL
      }
    }
    `);
	return (
		<NavWrapper>
			<Link to="/">
				<img src={data.logo.publicURL} alt="My Logo"/>
				<Container>
					<div><Link to="/">Home</Link></div>
					<div><Link to="/about/">About</Link></div>
					<div><Link to="/contact/">Contact</Link></div>
					<div><Link to="/blog/">Blog</Link></div>
					<p>CSS Modules are cool</p>
				</Container>
			</Link>
		</NavWrapper>
	);
};
