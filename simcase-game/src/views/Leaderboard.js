/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";

function Leaderboard(props) {
  const { onClose, openComponent, isComponentOpen } = props;

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
    <Component isOpen={isComponentOpen}>
      <div>
        <Dialog isOpen={openComponent} onDismiss={openComponent}>
          <main>
            <h1>Hello from Leaderboard after your submission</h1>
            <button onClick={onClose}>X</button>
          </main>
        </Dialog>
      </div>
    </Component>
  );
}

export default Leaderboard;
