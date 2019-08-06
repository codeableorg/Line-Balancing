/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { DataContext } from "../contexts/data";
import { ResultContext } from "../contexts/result";

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

const noneLine = {
  ...line,
  display: "none"
};

const currentLine = {
  ...line,
  border: "1px solid #7A0ECC",
  backgroundColor: "#7A0ECC"
};

function ProgressBar() {
  const dataContext = React.useContext(DataContext);
  const resultContext = React.useContext(ResultContext);

  return (
    <>
      {dataContext.ranking ? (
        <div css={container}>
          {Object.values(resultContext.mistakes).map((e, i) => {
            return (
              <>
                <Link to={`/game/${i + 1}`}>
                  {e === 0 ? (
                    <svg>
                      <use xlinkHref="#good" />
                    </svg>
                  ) : e <= 30 ? (
                    <svg>
                      <use xlinkHref="#more-or-less" />
                    </svg>
                  ) : (
                    <svg css={{ transform: "rotate(45deg)" }}>
                      <use xlinkHref="#bad" />
                    </svg>
                  )}
                </Link>
                <span css={i === 3 ? noneLine : line} />
              </>
            );
          })}
        </div>
      ) : (
        <div css={container}>
          <span
            css={
              dataContext.id > 1
                ? { display: "none" }
                : dataContext.id === 1
                ? currentCircle
                : circle
            }
          />
          <svg css={dataContext.id > 1 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={dataContext.id > 1 ? currentLine : line} />
          <span
            css={
              dataContext.id > 2
                ? { display: "none" }
                : dataContext.id === 2
                ? currentCircle
                : circle
            }
          />
          <svg css={dataContext.id > 2 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={dataContext.id > 2 ? currentLine : line} />
          <span
            css={
              dataContext.id > 3
                ? { display: "none" }
                : dataContext.id === 3
                ? currentCircle
                : circle
            }
          />
          <svg css={dataContext.id > 3 ? "" : { display: "none" }}>
            <use xlinkHref="#check" />
          </svg>
          <span css={dataContext.id > 3 ? currentLine : line} />
          <span css={dataContext.id === 4 ? currentCircle : circle} />
        </div>
      )}
    </>
  );
}

export default ProgressBar;
