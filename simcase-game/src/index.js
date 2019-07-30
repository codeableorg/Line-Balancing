/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Global, jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { Provider } from "react-redux";

import store from "./store";
import Welcome from "./views/Welcome";
import Role from "./views/Role";
import Walkthrough from "./views/Walkthrough";
import GameUI from "./views/GameUI";
import About from "./views/About";
import Ranking from "./views/Ranking";

const global = {
  body: {
    margin: "0",
    fontFamily: "'Roboto', sans-serif"
  },
  button: {
    "&:focus": {
      outline: "none"
    }
  }
};

const router = {
  height: "100vh",
  display: "grid",
  gridTemplate: "60px 1fr / 1fr",
  gridTemplateAreas: "'header' 'main-content'"
};

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Global styles={global} />
      <Router css={router}>
        <Welcome
          path="/"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
        <GameUI
          path="game/:id"
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
        <Role path="/role" />
        <Walkthrough path="/walkthrough" />
        <About path="/about" />
        <Ranking path="/ranking" />
      </Router>
    </>
  );
}

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
