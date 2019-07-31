/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";

import Role from "../views/Role";
import Walkthrough from "../views/Walkthrough";
import About from "../views/About";

import { Button } from "./ui";

const contentStyle = {
  padding: 10
};

const resetDialogStyle = {
  width: "90vw",
  height: "90vh",
  padding: 0,
  margin: "3vh auto",
  backgroundColor: "rgb(255,255,255)",
  borderRadius: 10
};

const closeButton = {
  position: "absolute",
  top: 5,
  right: 10,
  border: "none",
  padding: "8px 12px",
  margin: 0,
  borderRadius: "50%",
  backgroundColor: "#1275FA",
  color: "#FFFFFF",
  fontWeight: "bold"
};

const buttonBarStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh"
};

const modalContentStyles = {
  height: "75vh",
  overflow: "auto",
  color: "#4d4d4d",
  margin: 5
};

function componentShowed(componentId) {
  switch (componentId) {
    case 1:
      return <Role />;

    case 2:
      return <Walkthrough />;

    default:
      return <Role />;

    case 3:
      return <About />;
  }
}

function Modal(props) {
  const { onClose, openComponent, componentId } = props;
  const [staticContent, setStaticContent] = React.useState(componentId);

  return (
    <div>
      <div>
        <Dialog
          isOpen={openComponent}
          onDismiss={openComponent}
          css={resetDialogStyle}
        >
          <main css={contentStyle}>
            <button onClick={onClose} css={closeButton}>
              X
            </button>

            <div css={modalContentStyles}>{componentShowed(staticContent)}</div>
            {staticContent >= 2 ? (
              <div css={buttonBarStyles}>
                <Button
                  onClick={() => {
                    onClose();
                  }}
                >
                  Close
                </Button>
              </div>
            ) : (
              <div css={buttonBarStyles}>
                <Button
                  onClick={() => {
                    if (staticContent - 1 <= 0) setStaticContent(3);
                    else setStaticContent(staticContent - 1);
                  }}
                >
                  &lt; Previous
                </Button>
                <Button
                  onClick={() => {
                    if (staticContent + 1 >= 4) setStaticContent(1);
                    else setStaticContent(staticContent + 1);
                  }}
                >
                  Next &gt;
                </Button>
              </div>
            )}
          </main>
        </Dialog>
      </div>
    </div>
  );
}

export default Modal;
