import React from "react";
import Statement from "../components/Statement";
import ImageContainer from "../components/ImageContainer";
import TitlesForm from "../components/TitlesForm";
import TaskList from "../components/TaskRowList";
import Submit from "../components/Submit";
import Header from "../components/Header";

function GameUI({ id }) {
  return (
    <div>
      <Header />
      <Statement />
      <ImageContainer />
      <TitlesForm />
      <TaskList id={id} />
      <Submit />
    </div>
  );
}

export default GameUI;
