/** @jsx jsx */
import { jsx } from "@emotion/core";
import imgSource from "../assets/line-cook.png";

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
  return <img css={imgStyles} src={imgSource} alt="Simcase Case 1" />;
}

export default ImageContainer;
