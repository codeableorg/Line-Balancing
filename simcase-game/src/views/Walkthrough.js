/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";
import { createPortal } from "react-dom";
import Role from "./Role";

function Walkthrough(props) {
  const $portal = document.getElementById("portal");
  const { onClose, openComponent, closeComponent, isComponentOpen } = props;

  const [modal, setModal] = React.useState(null);

  const contentStyle = {
    padding: 10
  };
  const resetDialog = {
    width: "100vw",
    height: "100vh",
    padding: 0,
    margin: 0
  };

  const closeButton = {
    position: "fixed",
    top: 10,
    right: 10,
    border: "none",
    padding: 10,
    margin: 0,
    borderRadius: "50%",
    backgroundColor: "#004785",
    color: "#FFFFFF",
    fontWeight: "bold"
  };

  return (
    <Component isOpen={isComponentOpen}>
      <div>
        <Dialog
          isOpen={openComponent}
          onDismiss={openComponent}
          css={resetDialog}
        >
          <main css={contentStyle}>
            <h2>Walkthrough</h2>
            <img
              src="/assets/img/walkthrough.gif"
              alt="Walkthrough to use the app"
            />
            <ul id="walkthrough">
              <li>Read the problem statement</li>
              <li>Check the table</li>
              <li>Some text</li>
              <li>Some more text</li>
              <li>Finally the end og the list</li>
            </ul>
            <button onClick={onClose} css={closeButton}>
              X
            </button>
            <button
              onClick={() => {
                setModal("role");
              }}
            >
              Go to Role >>
            </button>
            {modal === "role" &&
              createPortal(
                <Role
                  component={isComponentOpen}
                  onClose={closeComponent}
                  openModal={openComponent}
                />,
                $portal
              )}
          </main>
        </Dialog>
      </div>
    </Component>
  );
}

export default Walkthrough;
