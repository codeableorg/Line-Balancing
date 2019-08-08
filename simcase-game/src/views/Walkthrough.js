/** @jsx jsx */
import { jsx } from "@emotion/core";

const info = {
  textAlign: "center",
  color: "#747474",
  lineHeight: "24px",
  p: {
    "&:first-of-type": {
      fontWeight: "bold",
      fontSize: "24px",
      color: "#44056E"
    }
  }
};

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%"
};

const titleRole = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  color: "#44056E",
  backgroundColor: "#DAC4FF"
};

function Walkthrough(props) {
  return (
    <main css={container}>
      <div css={titleRole}>
        <h2>Walkthrough</h2>
      </div>
      <div css={info}>
        <p>Step 1</p>
        <p>Review the activity time for each stage in the process.</p>
      </div>
      <div css={info}>
        <p>Step 2</p>
        <p>
          Shift adjacent tasks from one stage to another. Note that activities
          must be completed sequentially.
        </p>
      </div>
      <div css={info}>
        <p>Step 3</p>
        <p>Determine the optimal arrangement of tasks to maximize throughput</p>
      </div>
    </main>
  );
}

export default Walkthrough;
