/** @jsx jsx */
import { jsx } from "@emotion/core";

function Walkthrough(props) {
  const info = {
    textAlign: "center",
    color: "#747474",
    lineHeight: "24px",
    p: {
      width: "232px",
      "&:first-of-type": {
        fontWeight: "bold",
        fontSize: "24px"
      }
    }
  };

  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100"
  };

  const titleRole = {
    width: "337.5px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DAC4FF"
  };

  return (
    <main css={container}>
      <div css={titleRole}>
        <h2 css={{ color: "#44056E" }}>Walkthrough</h2>
      </div>
      <div css={info}>
        <p css={{ color: "#44056E" }}>Step 1</p>
        <p>Review the activity time for each stage in the process.</p>
      </div>
      <div css={info}>
        <p css={{ color: "#44056E" }}>Step 2</p>
        <p>
          Shift adjacent tasks from one stage to another. Note that activities
          must be completed sequentially.
        </p>
      </div>
      <div css={info}>
        <p css={{ color: "#44056E" }}>Step 3</p>
        <p>Determine the optimal arrangement of tasks to maximize throughput</p>
      </div>
    </main>
  );
}

export default Walkthrough;
