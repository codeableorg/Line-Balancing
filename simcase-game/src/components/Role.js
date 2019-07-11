/** @jsx jsx */

import { jsx } from "@emotion/core";

function ContentProvider(requiredContent) {
  const contentStyle = {
    padding: 10
  };
  return (
    <main css={contentStyle}>
      <h2>Role</h2>
      <img src="rolePic.png" alt="Role" />
      <p id="role">Role message for students</p>
    </main>
  );
}

export default ContentProvider;
