import React from "react";
import { Link } from "react-router-dom";
import { NONAME } from "dns";
export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Header</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/About">
        About
      </Link>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none"
};
