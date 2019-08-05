/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import firebase from "firebase";

import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import { Button } from "../components/ui";
import { MainContent } from "../components/helpers";
import { DataContext } from "../contexts/data";
import { FeedbackContext } from "../contexts/feedback";
import useTotalScore from "../selector";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
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

const alertLabel = {
  marginTop: "10px",
  fontSize: ".9em",
  color: "red",
  fontWeight: "bold",
  letterSpacing: "0.05em"
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
    "&:first-of-type": {
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
    padding: "7px",
    fontSize: "25px",
    lineHeight: "14px",
    textAlign: "center",
    outline: "none",
    border: "none",
    borderRadius: "0",
    borderBottom: "1px solid #fff",
    color: "#fff",
    background: "transparent"
  }
};

const actions = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%"
};

const title = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  h2: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#747474"
  }
};

const row = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "45px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#102A43",
  span: {
    margin: "0 36px 0 30px",
    fontWeight: "bold"
  },
  p: {
    padding: "0",
    "&:last-child": {
      marginRight: "30px",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#8719E0"
    }
  }
};

const rowOdd = { ...row, backgroundColor: "#F0F4F8" };

function Ranking() {
  const dataContext = React.useContext(DataContext);
  const feedbackContext = React.useContext(FeedbackContext);
  const [data, setData] = React.useState([]);
  const score = useTotalScore();
  const [user, setUser] = React.useState("");
  const [position, setPosition] = React.useState(0);
  const [scoreboard, setScoreboard] = React.useState(true);

  React.useState(() => {
    fire();
  }, [data]);

  // TODO: Refactor function fire and addFire
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
        data.push({ username: "you", points: score });
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

  function addFire() {
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
    firebase
      .firestore()
      .collection("data")
      .add({
        username: user,
        points: score
      });
    addFire();
    setScoreboard(false);
  }

  function redirectScoreboard() {
    return event => {
      event.type === "click" && setScoreboard(false);
    };
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  function playAgain() {
    dataContext.setRanking(false);
    feedbackContext.setState(false);
    navigate(`/game/1`);
  }

  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        {scoreboard ? (
          <>
            <ProgressBar />
            <section css={title}>
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
            </section>
            <div css={userSave}>
              <p>Save your score and see your position in the leaderboard</p>
              <form onSubmit={addUser}>
                <div css={formContent}>
                  <label>EMAIL</label>
                  <input type="email" name="user" onChange={handleChange} />
                </div>
                {alert && <span css={alertLabel}>{alert}</span>}
                <Button type="submit">SAVE MY SCORE</Button>
              </form>
            </div>
            <div css={actions}>
              <Button onClick={playAgain}>PLAY AGAIN</Button>
              <Button onClick={redirectScoreboard()}>LEADERBOARD</Button>
            </div>
          </>
        ) : (
          <>
            <section css={title}>
              <h2>TOP 5 PLAYERS</h2>
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
            </section>
            <section>
              {data &&
                data.map((user, index) => {
                  if (index < 5) {
                    return (
                      <div css={index % 2 === 0 ? rowOdd : row} key={index}>
                        <p>
                          <span>{index + 1}</span>
                          {user.username}
                        </p>
                        <p>{user.points}</p>
                      </div>
                    );
                  }
                })}
            </section>
            <section css={actions}>
              <Button onClick={playAgain}>PLAY AGAIN</Button>
              <Button>SHARE</Button>
            </section>
          </>
        )}
      </MainContent>
    </>
  );
}

export default Ranking;
