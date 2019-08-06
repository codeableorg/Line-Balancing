/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { Dialog } from "@reach/dialog";

import Modal from "./Modal";
import { Header } from "./helpers";
import { DataContext } from "../contexts/data";

const container = {
  display: "flex",
  justifyContent: "space-between",
  svg: {
    height: "39px",
    width: "39px"
  }
};

const question = {
  paddingRight: "28px",
  paddingTop: "14px",
  border: "none",
  backgroundColor: "transparent"
};

const about = {
  paddingLeft: "28px",
  paddingTop: "14px",
  border: "none",
  backgroundColor: "transparent"
};

const $portal = document.getElementById("portal");

function Navbar() {
  const dataContext = React.useContext(DataContext);
  const [showDialog, setShowDialog] = React.useState(dataContext.rule);
  const [modal, setModal] = React.useState("role");
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);

  function seeDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function openComponent() {
    setIsComponentOpen(true);
  }

  function closeComponent() {
    setIsComponentOpen(false);
    setModal(null);
    dataContext.setRule(false);
    closeDialog();
  }

  function openInstructions() {
    setShowDialog(true);
    setModal("role");
  }

  function openAbout() {
    setShowDialog(true);
    setModal("about");
  }

  return (
    <Header css={container}>
      <button onClick={openAbout} css={about}>
        <svg>
          <use xlinkHref="#info" />
        </svg>
      </button>
      <button onClick={openInstructions} css={question}>
        <svg>
          <use xlinkHref="#question" />
        </svg>
      </button>
      <Dialog isOpen={showDialog} onDismiss={seeDialog}>
        {modal === "role" &&
          createPortal(
            <Modal
              component={isComponentOpen}
              onClose={closeComponent}
              openModal={openComponent}
              componentId={1}
            />,
            $portal
          )}
        {modal === "about" &&
          createPortal(
            <Modal
              component={isComponentOpen}
              onClose={closeComponent}
              openModal={openComponent}
              componentId={3}
            />,
            $portal
          )}
      </Dialog>
    </Header>
  );
}

export default Navbar;
