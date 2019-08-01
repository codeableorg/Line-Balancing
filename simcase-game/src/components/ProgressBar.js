/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  marginBottom: "25px",
  svg: {
    width: "22px",
    height: "22px",
    fill: "#7A0ECC"
  }
};

const circle = {
  display: "block",
  width: "20px",
  height: "20px",
  border: "2px solid #D9E2EC",
  borderRadius: "50%"
};

const currentCircle = {
  ...circle,
  border: "2px solid #7A0ECC",
  backgroundColor: "#7A0ECC",
  boxShadow: "inset 0 0 0 5px #fff"
};

const line = {
  width: "22px",
  border: "1px solid #D9E2EC",
  backgroundColor: "#D9E2EC"
};

const currentLine = {
  ...line,
  border: "1px solid #7A0ECC",
  backgroundColor: "#7A0ECC"
};

function ProgressBar({ id = 1 }) {
  return (
    <div css={container}>
      <span
        css={id > 1 ? { display: "none" } : id === 1 ? currentCircle : circle}
      />
      <svg viewBox="0 0 52 52" css={id > 1 ? "" : { display: "none" }}>
        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18 C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811 c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166 C41.154,15.239,41.229,16.503,40.495,17.329z" />
      </svg>
      <span css={id > 1 ? currentLine : line} />
      <span
        css={id > 2 ? { display: "none" } : id === 2 ? currentCircle : circle}
      />
      <svg viewBox="0 0 52 52" css={id > 2 ? "" : { display: "none" }}>
        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18 C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811 c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166 C41.154,15.239,41.229,16.503,40.495,17.329z" />
      </svg>
      <span css={id > 2 ? currentLine : line} />
      <span
        css={id > 3 ? { display: "none" } : id === 3 ? currentCircle : circle}
      />
      <span css={id > 3 ? currentLine : line} />
      <svg viewBox="0 0 52 52" css={id > 3 ? "" : { display: "none" }}>
        <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18 C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811 c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166 C41.154,15.239,41.229,16.503,40.495,17.329z" />
      </svg>
      <span css={id === 4 ? currentCircle : circle} />
    </div>
  );
}

export default ProgressBar;
