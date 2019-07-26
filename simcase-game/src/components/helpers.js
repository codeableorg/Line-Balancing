/** @jsx jsx */
import { jsx } from "@emotion/core";

function Header({ styles, ...props }) {
  return (
    <header
      {...props}
      css={{
        gridArea: "header",
        ...styles
      }}
    />
  );
}

function MainContent({ styles, ...props }) {
  return (
    <main
      {...props}
      css={{
        gridArea: "main-content",
        ...styles
      }}
    />
  );
}

export { Header, MainContent };
