import React from "react";
import { Link } from "@reach/router";

function About() {
  const buttonBack = {
    marginTop: 100,
    padding: 20,
    borderRadius: 5,
    color: "white",
    background: "blue",
    textDecoration: "none"
  };

  return (
    <div>
      Hello from About Us View
      <Link to="/" css={buttonBack}>
        Go Back
      </Link>
    </div>
  );
}

export default About;
