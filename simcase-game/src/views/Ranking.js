/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
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

const title = {
  width: "20%"
};

const button = {
  width: "50%"
};

function Ranking() {
  const [data, setData] = React.useState([]);

  React.useState(() => {
    firebase
      .firestore()
      .collection("data")
      .orderBy("points", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setData(value =>
            value.concat({
              username: doc.data().username,
              points: doc.data().points
            })
          );
        });
      });
  }, [data]);

  return (
    <>
      <Navbar />
      <MainContent styles={container}>
        <h2>Leaderboard</h2>
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
                        <td>{user.id}</td>
                        <td css={userAddress}>
                          <div>
                            <img
                              src="/assets/img/user.png"
                              alt="user silhoutte"
                            />
                          </div>
                          <div>
                            <p>name:</p>
                            <p css={name}>{user.username}</p>
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
