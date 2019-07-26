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
        height: "calc( 100vh - 100px)",
        overflow: "auto",
        ...styles
      }}
    />
  );
}

export { Header, MainContent };
