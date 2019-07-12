/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Leaderboard() {
  const buttonBack = {
    marginTop: 100,
    padding: 20,
    borderRadius: 5,
    color: "white",
    background: "blue",
    textDecoration: "none"
  };

  const leaderboardDummyData = [
    { id: 1, username: "ccachay", points: 961 },
    { id: 2, username: "dconde", points: 871 },
    { id: 3, username: "jwayne", points: 841 },
    { id: 4, username: "wsmith", points: 771 },
    { id: 5, username: "sstallone", points: 762 },
    { id: 6, username: "dcuevas", points: 714 },
    { id: 7, username: "jperez", points: 601 }
  ];

  const tableStyle = {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
    border: "1px solid #000000"
  };

  const theadStyle = {
    backgroundColor: "#004785"
  };

  const tdataRight = {
    textAlign: "right"
  };

  const tdataLeft = {
    textAlign: "left"
  };

  const tdataCenter = {
    textAlign: "center"
  };

  return (
    <div>
      <h2>Hello from Leaderboard after your submission</h2>
      <table css={tableStyle}>
        <thead css={theadStyle}>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardDummyData.map((user, index) => {
            if (index < 5) {
              return (
                <tr key={user.username}>
                  <td css={tdataCenter}>{user.id}</td>
                  <td css={tdataLeft}>{user.username}</td>
                  <td css={tdataRight}>{user.points}</td>
                </tr>
              );
            }
            return void 0;
          })}
        </tbody>
      </table>
      <Link to="/" css={buttonBack}>
        Go Back
      </Link>
    </div>
  );
}

export default Leaderboard;
