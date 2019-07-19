/** @jsx jsx */
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";

const img = {
  display: "block",
  margin: "auto",
  maxWidth: "90%",
  borderRadius: "5px"
};

function ImageContainer({ id }) {
  const image = tasksJson["scenarios"][id]["image"];
  return <img css={img} src={image.src} alt={image.name} />;
}

export default ImageContainer;
