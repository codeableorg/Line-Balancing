/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";

function Leaderboard(props) {
  const { onClose, openComponent, isComponentOpen } = props;

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
