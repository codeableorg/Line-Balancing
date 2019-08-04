/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
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

function ProgressBar({ id, ranking }) {
  return (
    <>
      {ranking ? (
        <div css={container}>
          <svg>
            <use xlinkHref="#check" />
          </svg>
          <span css={line} />
          <svg>
            <use xlinkHref="#check" />
          </svg>
          <span css={line} />
          <svg>
            <use xlinkHref="#check" />
          </svg>
          <span css={line} />
          <svg>
            <use xlinkHref="#check" />
          </svg>
        </div>
      ) : (
        <div css={container}>
          <span
            css={
              id > 1 ? { display: "none" } : id === 1 ? currentCircle : circle
            }
          />
          <svg css={id > 1 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={id > 1 ? currentLine : line} />
          <span
            css={
              id > 2 ? { display: "none" } : id === 2 ? currentCircle : circle
            }
          />
          <svg css={id > 2 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={id > 2 ? currentLine : line} />
          <span
            css={
              id > 3 ? { display: "none" } : id === 3 ? currentCircle : circle
            }
          />
          <svg css={id > 3 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={id > 3 ? currentLine : line} />
          <span css={id === 4 ? currentCircle : circle} />
        </div>
      )}
    </>
  );
}

export default ProgressBar;
