/** @jsx jsx */
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

function TitlesForm({ task = "Brainstorm (1.0h)" }) {
  return (
    <div css={container}>
      {/* Task name */}
      <div css={item}>{task}</div>

      {/* Radio buttons 🍎*/}
      <div css={item}>
        <input type="radio" id="radio1" name="radio" checked />
      </div>
      <div css={item}>
        <input type="radio" id="radio2" name="radio" checked />
      </div>
      <div css={item}>
        <input type="radio" id="radio3" name="radio" checked />
      </div>
    </div>
  );
}

export default TitlesForm;
