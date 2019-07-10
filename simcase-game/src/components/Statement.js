/** @jsx jsx */
import { jsx } from "@emotion/core";

const center = {
  textAlign: "center",
  backgroundColor: "rgb(213,245,245)",
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%"
};
const textStyles = {
  color: "rgb(110,140,120)",
  fontFamily: "Arial",
  fontSize: "1.5em"
};

function Statement({
  statementText = "Balance production to increase production. Use the radio buttons to shift tasks between adjacent workers. Good Luck!"
}) {
  return (
    <div css={center}>
      <h1 css={textStyles}>{statementText}</h1>
    </div>
  );
}

export default Statement;
