/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";

function Role(props) {
  return (
    <main>
      <h2>Role</h2>
      <img
        src="/assets/img/rolePic.gif"
        alt="Role"
        css={{ width: 300, display: "block", margin: "0 auto" }}
      />
      <p id="role">Role message for students</p>
    </main>
  );
}

export default Role;
