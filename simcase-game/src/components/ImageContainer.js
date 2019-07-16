/** @jsx jsx */
import { jsx } from "@emotion/core";

const imgStyles = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "90%",
  height: "auto",
  borderRadius: "4px"
};

function ImageContainer({
  statementText = "Balance production to increase production. Use the radio buttons to shift tasks between adjacent workers. Good Luck!"
}) {
  return (
    <img css={imgStyles} src="/assets/img/line-cook.png" alt="line-cook" />
  );
}

export default ImageContainer;
