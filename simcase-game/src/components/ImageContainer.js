/** @jsx jsx */
import { jsx } from "@emotion/core";

import tasksJson from "../data/tasks.json";

const frame = {
  position: "relative",
  width: "200px",
  height: "200px"
};

const img = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  borderRadius: "50%"
};

function ImageContainer({ id }) {
  const image = tasksJson["scenarios"][id]["image"];
  return (
    <div css={frame}>
      <img css={img} src={image.src} alt={image.name} />
    </div>
  );
}

export default ImageContainer;
