/** @jsx jsx */
import { jsx } from "@emotion/core";

const info = {
  textAlign: "center",
  color: "#747474",
  lineHeight: "24px",
  p: {
    width: "232px",
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

function Role() {
  return (
    <main css={container}>
      <div css={titleRole}>
        <h2>ROLE</h2>
      </div>
      <div css={info}>
        <p>This is have 4 different scenarios</p>
        <p>
          You are a restaurant advisor helping food truck owners optimize their
          operations. You always begin by line balancing since it requires
          relatively little investment but can increase throughput and revenue.
        </p>
        <p>
          To align incentives, you use a performance-based fee. That means your
          fee grows as the trucks produce more revenue. Compete with your peers
          to see who can generate the most shared upside!
        </p>
      </div>
    </main>
  );
}

export default Role;
