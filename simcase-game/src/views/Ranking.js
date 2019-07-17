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
  // margin: 5,
  textAlign: "center"
  // backgroundColor: "blue"
};

const tableStyle = {
  width: "80%",
  margin: "0 auto",
  borderCollapse: "collapse"
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
  width: "100vw",
  backgroundColor: "red"
};

function Ranking(props) {
  const players = leaderboardDummyData;
  console.log("Datos pasados:", players);
  // console.log("Props pasados:", props);
  console.log("Leaderboard Dummy Data:", Object.values(leaderboardDummyData));
  return (
    <>
      <Header />
      <main css={contentStyle}>
        <h2>Leaderboard</h2>
        <section>
          <table css={tableStyle}>
            <caption>Top 5 players</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">username</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {players &&
                Object.values(players).map((user, index) => {
                  if (index < 5) {
                    return (
                      <tr key={user.username}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.points}</td>
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
