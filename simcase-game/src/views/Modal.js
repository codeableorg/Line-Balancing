/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Role from "../views/Role";
import Walkthrough from "../views/Walkthrough";
import Leaderboard from "../views/Leaderboard";

const contentStyle = {
  padding: 10
};

const resetDialogStyle = {
  width: "90vw",
  height: "90vh",
  padding: 0,
  margin: "5vh auto",
  backgroundColor: "rgb(255,255,255)",
  borderRadius: 10
};

const closeButton = {
  position: "fixed",
  top: 10,
  right: 10,
  border: "none",
  padding: "8px 12px",
  margin: 0,
  borderRadius: "50%",
  backgroundColor: "cyan",
  color: "#FFFFFF",
  fontWeight: "bold"
};

const buttonBarStyles = {
  backgroundColor: "red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

const modalContentStyles = {
  height: "80vh",
  overflow: "auto"
};

function NavigationButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function componentShowed(componentId) {
  console.log("ComponentId value: ", componentId);
  switch (componentId) {
    case 1:
      return <Role />;

    case 2:
      return <Walkthrough />;

    case 3:
      return <Leaderboard />;

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

            <div css={buttonBarStyles}>
              <NavigationButton
                onClick={() => {
                  if (staticContent - 1 <= 0) setStaticContent(3);
                  else setStaticContent(staticContent - 1);
                }}
              >
                Previous
              </NavigationButton>
              <NavigationButton
                onClick={() => {
                  if (staticContent + 1 >= 4) setStaticContent(1);
                  else setStaticContent(staticContent + 1);
                }}
              >
                Next
              </NavigationButton>
            </div>
          </main>
        </Dialog>
      </div>
    </div>
  );
}

export default Modal;
