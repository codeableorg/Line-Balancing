/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { Dialog } from "@reach/dialog";

import Modal from "./Modal";
import { Header } from "./helpers";

import "@reach/dialog/styles.css";

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

const menuList = {
  cursor: "pointer",
  padding: "20px 0",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2em"
};

const buttonOptions = {
  textDecoration: "none",
  backgroundColor: "rgba(35,87,144,0.1)",
  color: "#FFFFFF",
  margin: 15,
  width: 120,
  height: 50,
  border: "none",
  fontSize: 16
};

const closeButton = {
  backgroundColor: "#992C33"
};

const dialogStyles = {
  padding: 0,
  margin: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(35,87,144,0.8)"
};
function NavigationButton({ children, onClick }) {
  return (
    <button css={buttonOptions} onClick={onClick}>
      {children}
    </button>
  );
}

const $portal = document.getElementById("portal");

function Navbar({ showDialogValue = false, modalValue = null }) {
  const [showDialog, setShowDialog] = React.useState(showDialogValue);
  const [modal, setModal] = React.useState(modalValue);
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
        <svg viewBox="0 0 512 512">
          <path
            d="M256,0C114.613,0,0,114.617,0,256c0,141.391,114.613,256,256,256s256-114.609,256-256C512,114.617,397.387,0,256,0z
	 M256,128c17.674,0,32,14.328,32,32c0,17.68-14.326,32-32,32s-32-14.32-32-32C224,142.328,238.326,128,256,128z M304,384h-96
	c-8.836,0-16-7.156-16-16c0-8.836,7.164-16,16-16h16v-96h-16c-8.836,0-16-7.156-16-16c0-8.836,7.164-16,16-16h64
  c8.836,0,16,7.164,16,16v112h16c8.836,0,16,7.164,16,16C320,376.844,312.836,384,304,384z"
            fill="#8719E0"
          />
        </svg>
      </button>
      <button onClick={openInstructions} css={question}>
        <svg viewBox="0 0 98.27 98.27">
          <path
            d="M49.135,0C21.998,0,0,21.999,0,49.135S21.998,98.27,49.135,98.27c27.136,0,49.134-21.999,49.134-49.135S76.27,0,49.135,0z    M53.234,82.086c-1.539,1.521-3.684,2.293-6.369,2.293c-2.746,0-4.918-0.754-6.456-2.241c-1.545-1.495-2.328-3.604-2.328-6.269   c0-2.754,0.769-4.887,2.284-6.336c1.51-1.44,3.696-2.172,6.5-2.172c2.714,0,4.861,0.746,6.386,2.219   c1.528,1.479,2.304,3.596,2.304,6.289C55.555,78.472,54.773,80.564,53.234,82.086z M68.424,40.295   c-1.572,2.511-4.566,5.354-8.9,8.45c-2.817,2.083-4.627,3.684-5.355,4.74c-0.686,0.995-1.034,2.346-1.034,4.014v1.98   c0,0.828-0.672,1.5-1.5,1.5H41.045c-0.828,0-1.5-0.672-1.5-1.5v-2.621c0-3.041,0.663-5.732,1.972-8   c1.296-2.244,3.665-4.638,7.043-7.116c3.135-2.239,5.209-4.06,6.183-5.422c0.923-1.297,1.392-2.768,1.392-4.369   c0-1.742-0.615-3.024-1.881-3.92c-1.329-0.941-3.246-1.419-5.698-1.419c-4.252,0-9.173,1.366-14.624,4.061   c-0.739,0.366-1.639,0.064-2.008-0.676l-4.316-8.67c-0.36-0.725-0.082-1.604,0.63-1.988c6.689-3.614,13.864-5.447,21.325-5.447   c6.421,0,11.613,1.578,15.434,4.69c3.864,3.15,5.825,7.402,5.825,12.639C70.82,34.697,70.014,37.749,68.424,40.295z"
            fill="#8719E0"
          />
        </svg>
      </button>
      <Dialog isOpen={showDialog} onDismiss={seeDialog} css={dialogStyles}>
        <div css={menuList}>
          <button
            css={{ ...buttonOptions, ...closeButton }}
            onClick={closeDialog}
          >
            Close
          </button>
          <NavigationButton
            onClick={() => {
              setModal("ranking");
            }}
          >
            Leaderboard
          </NavigationButton>
          <NavigationButton
            onClick={() => {
              setModal("role");
            }}
          >
            Role
          </NavigationButton>
          <NavigationButton
            onClick={() => {
              setModal("walk");
            }}
          >
            Walkthrough
          </NavigationButton>

          <button
            onClick={() => {
              setModal("about");
            }}
            css={{ ...buttonOptions, textDecoration: "none" }}
          >
            About
          </button>
        </div>
        {modal === "ranking" &&
          createPortal(
            <Modal
              component={isComponentOpen}
              onClose={closeComponent}
              openModal={openComponent}
              componentId={3}
            />,
            $portal
          )}
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
        {modal === "walk" &&
          createPortal(
            <Modal
              component={isComponentOpen}
              onClose={closeComponent}
              openModal={openComponent}
              componentId={2}
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
