/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "100%",
        padding: "10px",
        fontSize: "1rem",
        border: "none",
        color: "#fff",
        background: "#014785",
        ...styles,
        a: {
          color: "#fff",
          textDecoration: "none"
        }
      }}
    />
  );
}

function Statement({ styles, ...props }) {
  return (
    <p
      {...props}
      css={{
        width: "90%",
        margin: "10px auto",
        padding: "3px 5px",
        textAlign: "center",
        borderRadius: "5px",
        backgroundColor: "#d5f5f5",
        color: "green",
        ...styles
      }}
    />
  );
}

function Table({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        display: "table",
        verticalAlign: "middle",
        width: "90%",
        margin: "16px auto",
        div: {
          "&:first-child": {
            width: "40%"
          },
          display: "table-cell",
          textAlign: "center",
          color: "#3a608f"
        },
        ...styles
      }}
    />
  );
}

export { Button, Statement, Table };
