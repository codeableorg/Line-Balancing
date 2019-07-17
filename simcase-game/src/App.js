/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";
import Welcome from "./views/Welcome";
import Role from "./views/Role";
import Walkthrough from "./views/Walkthrough";
import GameUI from "./views/GameUI";
import About from "./views/About";
import Ranking from "./views/Ranking";
import Feedback from "./views/Feedback";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Router>
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
      <Role path="role" />
      <Walkthrough path="walkthrough" />
      <About path="about" />
      <Ranking path="ranking" />
      <Feedback path="feedback/:id" />
    </Router>
  );
}

export default App;
