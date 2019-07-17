/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import Header from "../components/Header";

const leaderboardDummyData = {
  1: { id: 1, username: "ccachay", points: 961 },
  2: { id: 2, username: "dconde", points: 871 },
  3: { id: 3, username: "jwayne", points: 841 },
  4: { id: 4, username: "wsmith", points: 771 },
  5: { id: 5, username: "sstallone", points: 762 },
  6: { id: 6, username: "dcuevas", points: 714 },
  7: { id: 7, username: "jperez", points: 601 }
};

const contentStyle = {
  height: "75vh",
  overflow: "auto",
  color: "#4d4d4d",
  textAlign: "center"
};

const tableStyle = {
  width: "85%",
  margin: "0 auto",
  borderCollapse: "collapse",
  fontSize: 16
};

const captionStyle = {
  fontWeight: "bold",
  fontSize: 18,
  padding: 5
};

const col_1Style = {
  width: "20%"
};

const col_2Style = {
  // width: "50%"
};

const col_3Style = {
  width: "30%"
};

const imgTableStyle = {
  width: 40
  // marginRight: 10,
};

const buttonOptions = {
  textDecoration: "none",
  color: "#FFFFFF",
  backgroundColor: "#3477F2",
  padding: "10px 15px",
  margin: 4,
  border: "none",
  borderRadius: 5,
  fontSize: "1em"
};

const buttonBarStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
  position: "absolute",
  bottom: 0,
  width: "100vw"
};

function Ranking(props) {
  const players = leaderboardDummyData;
  console.log("Datos pasados:", players);

  console.log("Leaderboard Dummy Data:", Object.values(leaderboardDummyData));
  return (
    <>
      <Header />
      <main css={contentStyle}>
        <h2>Leaderboard</h2>
        <section>
          <table css={tableStyle}>
            <caption css={captionStyle}>Top 5 players</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  css={{
                    ...col_1Style,
                    backgroundColor: "#0C4785",
                    color: "#FFFFFF",
                    padding: 10
                  }}
                >
                  #
                </th>
                <th
                  scope="col"
                  css={{
                    ...col_2Style,
                    backgroundColor: "#0C4785",
                    color: "#FFFFFF"
                  }}
                >
                  username
                </th>
                <th
                  scope="col"
                  css={{
                    ...col_3Style,
                    backgroundColor: "#0C4785",
                    color: "#FFFFFF"
                  }}
                >
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {players &&
                Object.values(players).map((user, index) => {
                  if (index < 5) {
                    return (
                      <tr key={user.username}>
                        <td css={col_1Style}>{user.id}</td>
                        <td
                          css={{
                            ...col_2Style,
                            textAlign: "left",
                            padding: 5,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start"
                          }}
                        >
                          <div>
                            <img
                              src="assets/img/user.png"
                              alt="user silhoutte"
                              css={imgTableStyle}
                            />
                          </div>
                          <div css={{ marginLeft: 10 }}>
                            <p css={{ padding: 0, margin: 0 }}>name:</p>
                            <p
                              css={{
                                padding: 0,
                                margin: 0,
                                fontSize: 20,
                                fontWeight: "bold"
                              }}
                            >
                              {user.username}
                            </p>
                          </div>
                        </td>
                        <td
                          css={{
                            ...col_3Style,
                            textAlign: "right",
                            padding: 5
                          }}
                        >
                          {user.points}
                        </td>
                      </tr>
                    );
                  }
                  return void 0;
                })}
            </tbody>
          </table>
        </section>
        <div css={buttonBarStyles}>
          <Link css={buttonOptions} to="/">
            &lt; Go Home
          </Link>
          <Link css={buttonOptions} to="/game">
            Play Again &gt;
          </Link>
        </div>
      </main>
    </>
  );
}

export default Ranking;
