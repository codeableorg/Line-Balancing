/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import firebase from "firebase";

import Navbar from "../components/Navbar";
import { Button } from "../components/ui";
import { MainContent } from "../components/helpers";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
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

const rankNum = {
  fontSize: "1.2em",
  fontWeight: "bold"
};

const alertLabel = {
  marginTop: "10px",
  fontSize: ".9em",
  color: "red",
  fontWeight: "bold",
  letterSpacing: "0.05em"
};

const userInput = {
  padding: "7px",
  textAlign: "center",
  borderRadius: "5px"
};

const userScore = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "244px",
  height: "62px",
  padding: "0 15px",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0,0,0,0.12)",
  color: "#fff",
  background: "#8719E0"
};

const scoreContent = {
  display: "flex",
  flexDirection: "column",
  fontWeight: "900",
  fontSize: "35px",
  lineHeight: "41px",
  textAlign: "center",
  letterSpacing: "0.0357143em",
  span: {
    "&:first-child": {
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "14px"
    }
  }
};

const line = {
  // TODO: Refactorize using pseudo class :before or :after
  background: "linear-gradient(#fff,#fff) no-repeat center/2px 100%",
  padding: "20px",
  height: "22px"
};

const userSave = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  p: {
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.0357143em"
  },
  button: {
    width: "224px",
    margin: "16px 0"
  }
};

const formContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "333px",
  height: "91px",
  backgroundColor: "#8719E0",
  padding: "0 10px",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
  label: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "center",
    letterSpacing: "0.2457em"
  },
  input: {
    background: "transparent",
    border: "none",
    borderRadius: "0",
    borderBottom: "1px solid #fff"
  }
};

const actions = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%"
};

function Ranking() {
  const [data, setData] = React.useState([]);
  const score = useTotalScore();
  const [user, setUser] = React.useState("");
  const [position, setPosition] = React.useState(0);
  const [scoreboard, setScoreboard] = React.useState(true);
  const [alert, setAlert] = React.useState("");

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

  function addUser(e) {
    e.preventDefault();
    if (/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/.test(user)) {
      firebase
        .firestore()
        .collection("data")
        .add({
          username: user,
          points: score
        });
      fire();
      setScoreboard(false);
    } else {
      setAlert("Enter a name without symbols");
    }
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        {scoreboard ? (
          <>
            <div css={userScore}>
              <div css={scoreContent}>
                <span>RANKING</span>
                <span>{position}</span>
              </div>
              <div css={line} />
              <div css={scoreContent}>
                <span>POINTS</span>
                <span>{score}</span>
              </div>
            </div>
            <div css={userSave}>
              <p>Save your score and see your position in the leaderboard</p>
              <form onSubmit={addUser}>
                <div css={formContent}>
                  <label>EMAIL</label>
                  <input
                    type="text"
                    name="user"
                    onChange={handleChange}
                    css={userInput}
                    autoComplete="off"
                  />
                </div>
                {alert && <span css={alertLabel}>{alert}</span>}
                <Button type="submit">SAVE MY SCORE</Button>
              </form>
            </div>
            <div css={actions}>
              <Button>
                <Link to="/game/1">PLAY AGAIN</Link>
              </Button>
              <Button>
                <Link to="/">LEADERBOARD</Link>
              </Button>
            </div>
          </>
        ) : (
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
        )}
      </MainContent>
    </>
  );
}

export default Ranking;
