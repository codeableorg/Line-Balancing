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
  color: "blue",
  fontSize: "1.0em"
};

function TitlesForm() {
  return (
    <div css={container}>
      <div css={item}>Tasks</div>
      <div css={item}>Station 1</div>
      <div css={item}>Station 2</div>
      <div css={item}>Station 3</div>
    </div>
  );
}

export default TitlesForm;
