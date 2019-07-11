/** @jsx jsx */
import { jsx } from "@emotion/core";

const Container = {
  textAlign: "center",
  backgroundColor: "rgb(213,245,245)",
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%",
  borderRadius: "4px",
  padding: "1px 1em",
  boxSizing: "border-box",
  marginBottom: "16px",
  fontSize: "1.2em"
};
const textStyles = {
  color: "green",
  fontFamily: "Arial"
};

function Statement({
  statementText = "Balance production to increase production. Use the radio buttons to shift tasks between adjacent workers. Good Luck!"
}) {
  return (
    <div css={Container}>
      <p css={textStyles}>{statementText}</p>
    </div>
  );
}

export default Statement;
