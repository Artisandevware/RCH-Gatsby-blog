import React from "react";
import { Link } from "gatsby";
import containerStyles from "./container.module.css";

export default function Container({ children }) {
	return <div className={containerStyles.container}>{children}</div>;
}
import React from "react"

import Container from "../components/container"

export default function NavBar() {
  return (
    <Container>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about/">About</Link></div>
      <div><Link to="/conctact/">Contact</Link></div>
      <div><Link to="/blog/">Blog</Link></div>
      <p>CSS Modules are cool</p>
    </Container>
  )
}