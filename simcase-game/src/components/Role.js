/** @jsx jsx */

import { jsx } from "@emotion/core";

function Role() {
  const contentStyle = {
    padding: 10,
    color: "#3d3d3d"
  };

  const titleStyle = {
    color: "#3d3d3d",
    fontSize: "1.8em"
  };

  const imageStyle = {
    width: 300,
    margin: "0 auto",
    display: "block"
  };

  const pStyle = {
    color: "#3d3d3d"
  };
  return (
    <main css={contentStyle}>
      <h2 css={titleStyle}>Role</h2>
      <img src="assets/img/rolePic.gif" alt="Role" css={imageStyle} />
      <p css={pStyle}>Role message for students</p>
    </main>
  );
}

export default Role;
