/** @jsx jsx */

import { jsx } from "@emotion/core";

function ContentProvider(requiredContent) {
  let result = "";
  const welcome = (
    <main>
      <h2>Welcome</h2>
      <img src="welcomePic.png" alt="Welcome" />
      <p id="welcome">Welcome message for students</p>
    </main>
  );

  const role = (
    <main>
      <h2>Role</h2>
      <img src="rolePic.png" alt="Role" />
      <p id="role">Role message for students</p>
    </main>
  );

  const walkthrough = (
    <main>
      <h2>Walkthrough</h2>
      <img src="walkthroughPic.gif" alt="Walkthrough to use the app" />
      <ul id="walkthrough">
        <li>Read the problem statement</li>
        <li>Check the table</li>
        <li>Some text</li>
        <li>Some more text</li>
        <li>Finally the end og the list</li>
      </ul>
    </main>
  );
  switch (requiredContent.requiredContent) {
    case "welcome":
      result = welcome;
      break;
    case "role":
      result = role;
      break;
    case "walkthrough":
      result = walkthrough;
      break;
    default:
      result = <h2>Error content</h2>;
  }

  return result;
}

export default ContentProvider;
