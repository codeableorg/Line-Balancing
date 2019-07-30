/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "140px",
        height: "36px",
        padding: "10px",
        border: "none",
        background: "#DAC4FF",
        boxShadow:
          "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
        borderRadius: "2px",
        color: "#44056E",
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: "16px",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: "0.0357143em",
        a: {
          color: "#44056E",
          textDecoration: "none",
          fontSize: "14px",
          lineHeight: "16px",
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "0.0357143em"
        },
        ...styles
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
