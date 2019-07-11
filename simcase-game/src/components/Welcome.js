/** @jsx jsx */

import { jsx } from "@emotion/core";

function Welcome() {
  const contentStyle = {
    padding: 10
  };
  return (
    <main css={contentStyle}>
      <h2>Welcome</h2>
      <img
        src="assets/img/wharton_logo.png"
        alt="Welcome"
        css={{ width: 300 }}
      />
      <p id="welcome">Welcome message for students</p>
    </main>
  );
}

export default Welcome;
