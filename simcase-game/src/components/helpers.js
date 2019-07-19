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

function Action({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        gridArea: "action",
        ...styles
      }}
    />
  );
}

export { Header, MainContent, Action };
