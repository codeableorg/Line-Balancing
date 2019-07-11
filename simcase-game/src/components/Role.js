/** @jsx jsx */

import { jsx } from "@emotion/core";

function Role() {
  const contentStyle = {
    padding: 10
  };
  return (
    <main css={contentStyle}>
      <h2>Role</h2>
      <img src="assets/img/rolePic.gif" alt="Role" css={{ width: 300 }} />
      <p id="role">Role message for students</p>
    </main>
  );
}

export default Role;
