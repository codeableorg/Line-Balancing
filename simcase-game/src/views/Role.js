/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Role() {
  const contentStyle = {
    padding: 10
  };

  const buttonBack = {
    marginTop: 100,
    padding: 20,
    borderRadius: 5,
    color: "white",
    background: "blue",
    textDecoration: "none"
  };

  return (
    <main css={contentStyle}>
      <h2>Role</h2>
      <img src="assets/img/rolePic.gif" alt="Role" css={{ width: 300 }} />
      <p id="role">Role message for students</p>
      <Link to="/" css={buttonBack}>
        Go Back
      </Link>
    </main>
  );
}

export default Role;
