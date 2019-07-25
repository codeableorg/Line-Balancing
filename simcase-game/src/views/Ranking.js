/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link, Redirect } from "@reach/router";
import firebase from "firebase";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui";
import { MainContent, Action } from "../components/helpers";

const container = {
  height: "75vh",
  overflow: "auto",
  color: "#4d4d4d",
  textAlign: "center",
  table: {
    width: "85%",
    margin: "0 auto",
    borderCollapse: "collapse",
    fontSize: 16
  },
  caption: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5
  },
  th: {
    backgroundColor: "#0C4785",
    color: "#FFFFFF",
    padding: "10px"
  }
};

const userAddress = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  padding: 5,
  textAlign: "left",
  p: {
    padding: "0px",
    margin: "0px"
  },
  img: {
    width: "40px",
    marginRight: "10px"
  }
};

const name = {
  fontSize: "20px",
  fontWeight: "bold"
};

const you = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "red"
};

const title = {
  width: "20%"
};

const button = {
  width: "50%"
};

const rankNum = {
  fontSize: "1.2em",
  fontWeight: "bold"
};

function Ranking() {
  const [data, setData] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [user, setUser] = React.useState("");
  const [position, setPosition] = React.useState(0);
  const [scoreboard, setScoreboard] = React.useState(true);

  React.useState(() => {
    fire();
  }, [data]);

  function fire() {
    firebase
      .firestore()
      .collection("data")
      .orderBy("points", "desc")
      .get()
      .then(querySnapshot => {
        let data = [];
        let score = ~~(Math.random() * (1000 - 0) + 0);
        setScore(score);
        querySnapshot.forEach(doc => {
          data.push({
            username: doc.data().username,
            points: doc.data().points
          });
        });
        data.push({ username: "You", points: score });
        data.sort((a, b) => {
          return b.points - a.points;
        });
        setData(data);
        data.filter((value, index) => {
          if (value.points === score) {
            setPosition(index + 1);
          }
        });
      });
  }

  function addUser() {
    firebase
      .firestore()
      .collection("data")
      .add({
        username: user,
        points: score
      });

    fire();
    setScoreboard(false);
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        <h2>Leaderboard</h2>
        {scoreboard && (
          <>
            <div
              css={{
                display: "flex",
                background:
                  "linear-gradient(white, white) no-repeat center/2px 100%",
                justifyContent: "space-between",
                width: "150px",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#0C4785",
                color: "white",
                borderRadius: "10px"
              }}
            >
              <div css={{ display: "flex", flexDirection: "column" }}>
                <span css={{ fontSize: ".7em" }}>RANK</span>
                <strong
                  css={{
                    padding: "0 15px",
                    marginTop: "10px"
                  }}
                >
                  {position}
                </strong>
              </div>
              <div css={{ display: "flex", flexDirection: "column" }}>
                <span css={{ fontSize: ".7em" }}>SCORE</span>
                <strong
                  css={{
                    padding: "0 15px",
                    marginTop: "10px"
                  }}
                >
                  {score}
                </strong>
              </div>
            </div>
            <form onSubmit={addUser} css={{ margin: "20px 0" }}>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "200px",
                  margin: "10px auto",
                  backgroundColor: "#0C4785",
                  padding: "10px",
                  color: "white",
                  borderRadius: "10px"
                }}
              >
                <label
                  css={{
                    fontSize: ".85em",
                    marginBottom: "10px"
                  }}
                >
                  Email
                </label>
                <input
                  type="text"
                  name="user"
                  onChange={handleChange}
                  css={{ padding: "5px", textAlign: "center" }}
                  placeholder="Enter your name"
                />
              </div>
            </form>
          </>
        )}
        <section>
          <table>
            <caption>Top 5 players</caption>
            <thead>
              <tr>
                <th scope="col" css={title}>
                  #
                </th>
                <th scope="col">username</th>
                <th scope="col" css={title}>
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user, index) => {
                  if (index < 5) {
                    return (
                      <tr key={user.username}>
                        <td css={rankNum}>{index + 1}</td>
                        <td css={userAddress}>
                          <div>
                            <img
                              src="/assets/img/user.png"
                              alt="user silhoutte"
                            />
                          </div>
                          <div>
                            <p>name:</p>
                            {user.username === "You" ? (
                              <p css={you}>{user.username}</p>
                            ) : (
                              <p css={name}>{user.username}</p>
                            )}
                          </div>
                        </td>
                        <td>{user.points}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </section>
      </MainContent>
      <Action>
        <Button styles={button}>
          <Link to="/game/1">Play Again</Link>
        </Button>
        <Button styles={button}>
          <Link to="/">Go Home</Link>
        </Button>
      </Action>
    </>
  );
}

export default Ranking;
