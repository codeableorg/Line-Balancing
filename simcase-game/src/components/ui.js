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

export { Button };
