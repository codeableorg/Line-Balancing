/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const contentStyle = {
  padding: 10
};

function Role() {
  return (
    <main css={contentStyle}>
      <h2>Role</h2>
      <img
        src="assets/img/rolePic.gif"
        alt="Role"
        css={{ width: 300, display: "block", margin: "0 auto" }}
      />
      <p id="role">Role message for students</p>
    </main>
  );
}

export default Role;
