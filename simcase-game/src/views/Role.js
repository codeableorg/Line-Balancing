/** @jsx jsx */
import { jsx } from "@emotion/core";

const img = {
  display: "block",
  width: "300px",
  margin: "0 auto"
};

function Role() {
  return (
    <main>
      <h2>Role</h2>
      <img css={img} src="/assets/img/rolePic.gif" alt="Role" />
      <p id="role">Role message for students</p>
    </main>
  );
}

export default Role;
