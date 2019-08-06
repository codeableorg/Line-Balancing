/** @jsx jsx */
import { jsx } from "@emotion/core";

const img = {
  display: "block",
  width: "300px",
  margin: "0 auto"
};

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
  height: "100%"
};

const titleRole = {
  width: "337.5px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#DAC4FF"
};

function Role() {
  return (
    <main css={container}>
      <div css={titleRole}>
        <h2 css={{ color: "#44056E" }}>ROLE</h2>
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
