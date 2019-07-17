/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  background: "rgb(213,245,245)",
  borderRadius: "4px",
  display: "table",
  tableLayout: "fixed",
  width: "90%",
  height: "4vh",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "16px", //Needs a little fix
  marginBottom: "16px" // Must be automatic
};

const item = {
  display: "table-cell",
  verticalAlign: "middle",
  textAlign: "center",
  fontFamily: "Arial",
  color: "rgb(61,125,255)",
  fontSize: "0.9em"
};

function TaskRow({ handleChange, task }) {
  return (
    <div css={container}>
      <div css={item}>{task.name}</div>
      <div css={item}>
        <input type="radio" onChange={handleChange} name={task.id} value="0" />
      </div>
      <div css={item}>
        <input type="radio" onChange={handleChange} name={task.id} value="1" />
      </div>
      <div css={item}>
        <input type="radio" onChange={handleChange} name={task.id} value="2" />
      </div>
    </div>
  );
}

export default TaskRow;
