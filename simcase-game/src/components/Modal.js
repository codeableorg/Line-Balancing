/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";

import Role from "../views/Role";
import Walkthrough from "../views/Walkthrough";
import About from "../views/About";

import { Button } from "./ui";

const dialog = {
  margin: "auto",
  marginTop: "20px",
  width: "90vw",
  height: "95vh",
  padding: "0"
};

const buttonBarStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh"
};

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "100%"
};

function componentShowed(componentId) {
  switch (componentId) {
    case 1:
      return <Role />;
    case 2:
      return <Walkthrough />;
    case 3:
      return <About />;
    default:
      return <Role />;
  }
}

function Modal(props) {
  const { onClose, openComponent, componentId } = props;
  const [staticContent, setStaticContent] = React.useState(componentId);

  return (
    <div>
      <div>
        <Dialog isOpen={openComponent} onDismiss={openComponent} css={dialog}>
          <main>
            <div css={container}>{componentShowed(staticContent)}</div>
            {staticContent === 2 ? (
              <div css={buttonBarStyles}>
                <Button
                  onClick={() => {
                    onClose();
                  }}
                >
                  CLOSE
                </Button>
              </div>
            ) : staticContent === 3 ? (
              <div css={buttonBarStyles}>
                <Button
                  onClick={() => {
                    onClose();
                  }}
                >
                  CLOSE
                </Button>
              </div>
            ) : (
              <div css={buttonBarStyles}>
                <Button
                  onClick={() => {
                    if (staticContent + 1 >= 3) setStaticContent(1);
                    else setStaticContent(staticContent + 1);
                  }}
                >
                  NEXT
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
