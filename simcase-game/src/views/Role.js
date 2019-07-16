/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import { createPortal } from "react-dom";

import Walkthrough from "./Walkthrough";

const contentStyle = {
  padding: 10
};

const resetDialog = {
  width: "100vw",
  height: "100vh",
  padding: 0,
  margin: 0,
  backgroundColor: "rgba(255,255,255,0.7)"
};

const closeButton = {
  position: "fixed",
  top: 10,
  right: 10,
  border: "none",
  padding: "8px 12px",
  margin: 0,
  borderRadius: "50%",
  backgroundColor: "#004785",
  color: "#FFFFFF",
  fontWeight: "bold"
};

function NavigationButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Role(props) {
  const $portal = document.getElementById("portal");
  const { onClose, openComponent, closeComponent, isComponentOpen } = props;

  const [modal, setModal] = React.useState(null);

  return (
    <div isOpen={isComponentOpen}>
      <div>
        <Dialog
          isOpen={openComponent}
          onDismiss={openComponent}
          css={resetDialog}
        >
          <main css={contentStyle}>
            <button onClick={onClose} css={closeButton}>
              X
            </button>

            <h2>Role</h2>
            <img src="assets/img/rolePic.gif" alt="Role" css={{ width: 300 }} />
            <p id="role">Role message for students</p>

            <NavigationButton
              onClick={() => {
                setModal("walkthrough");
              }}
            >
              Return to Walkthrough
            </NavigationButton>
            {modal === "walkthrough" &&
              createPortal(
                <Walkthrough
                  component={isComponentOpen}
                  onClose={closeComponent}
                  openModal={openComponent}
                />,
                $portal
              )}
          </main>
        </Dialog>
      </div>
    </div>
  );
}

export default Role;
